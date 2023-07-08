---
author: "Fabian Engeln"
title: "Session Tracking in Google Analytics for in-depth Customer Journey Analyses"
date: 2022-07-01
description: "How to configure Custom Tracking in Google Tag Manager and Google Analytics to Capture Client ID, Session ID, and Hit ID"
tags: ["session","analytics","tracking"]
thumbnail: session-id-tracking-for-customer-journey-analyses.jpg
---

My clients often ask me the following questions:

- How can I view certain events like add to baskets along with other actions of the customers in the same session?
- What are the pain points the site users are facing and how can I understand their customer journey better?
- What are the site journeys which ultimately lead to a conversion?

With standard Google Analytics tracking, this is not as easy to answer. Yes, there are some ways to show the user flow on the site. However, it is sometimes vital to understand the more specific steps a customer accomplishes within one session. Especially UX Designers often want to understand certain sessions in more depth and engage in qualitative analysis. Because of this, analysts like me make significant efforts to improve the information gathered by Google Analytics. Creating a solid base of session analytics data is one of the greatest methods to start responding to these inquiries. Imagine being able to see a report of all the steps a user took on your website before leaving or making a purchase. That kind of data is vital for any kind of conversion optimisation and the tutorial below can get you started in the right direction.

## 1st step: Creating custom dimensions for session ID, client ID and hit ID in Google Analytics

For session ID, client ID, and hit ID data buckets, we first need to create custom dimensions in Google Analytics. With the needed edit permissions for custom dimensions, you will need to complete the following things:

1. Open [Google Analytics](analytics.google.com)) (Universal Analytics) and navigate to "Admin", then go to "Custom Definitions" and "Custom Dimensions" under the property tab.

{{< figure src="./images/universal analytics-custom-definitions-view.jpg" alt="Guide how you navigate to the custom definitions view in Universal Analytics" title="Custom definitions view">}}

2. Click "New Custom Dimension" and add the first custom dimension for session ID. The scope should be "Session".

{{< figure src="./images/universal analytics-custom-definitions-configuration.jpg" alt="Guide how you setup the session ID custom dimension in Universal Analytics" title="Custom dimension settings for session ID">}}

3. Complete the same setup steps for client ID and hit ID. For hit ID the scope needs to be "Hit".

{{< figure src="./images/universal analytics-custom-definitions-list.jpg" alt="List overview of all custom dimensions in Universal Analytics" title="List overview of all custom dimensions">}}

4. Note down the index for each dimension. That will need to be used on the subsequent steps.

## 2nd step: Setup a Google Tag Manager custom JavaScript variable to generate session ID, client ID and hit ID

Now that the dimensions are in Google Analytics, we need to fill them with data. To achieve this, we first need to create a new variable - I call it "Session ID / Client ID / Hit ID" and set it up as a custom JavaScript variable. The suggest code for this variable is as follows:

~~~~

function () {
   return function (model) {
      function setClientSessionAndHitId() {

         var gaClientIdCookie = '_gaclientid';
         var gaSessionIdCookie = '_gasessionid';
         var gaHitIdCookie = '_gahitid';
         var domainPath = (function () {
            var hostname = window.location.hostname;
            var myDomain = 'domain=' + hostname + ';path=/';
            return myDomain;
         })();

         var clientId = model.get('clientId');
         var newSessionId = (function () {
            var currentDate = (function () {
               var today = new Date();
               var dd = today.getDate().toString();
               var mm = (today.getMonth() + 1).toString();
               var yyyy = today.getFullYear().toString();
               if (dd.length < 2) {
                  dd = '0' + dd;
               }
               if (mm.length < 2) {
                  mm = '0' + mm;
               }
               return yyyy + mm + dd;
            })();
            var randomNumberString = Math.floor((Math.random() * 10000000) + 1).toString();
            var randomEightDigitNumber = (function () {
               if (randomNumberString.length === 8) {
                  return randomNumberString;
               } else {
                  while (randomNumberString.length < 8) {
                     randomNumberString = '0' + randomNumberString;
                  }
                  return randomNumberString;
               }
            })();
            return currentDate + '|' + randomEightDigitNumber;
         })();

         var newHitId = (function () {
            var currentTime = (function () {
               var today = new Date();
               var hh = today.getHours();
               var mm = today.getMinutes();
               var ss = today.getSeconds();

               if (hh < 10) {
                  hh = '0' + hh;
               }
               if (mm < 10) {
                  mm = '0' + mm;
               }
               if (ss < 10) {
                  ss = '0' + ss;
               }
               return hh + ":" + mm + ":" + ss;
            })();
            return currentTime;
         })();

         function set30MinuteCookie(cname, cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (30 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domainPath;
         }

         function set10YearCookie(cname, cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";" + domainPath;
         }

         function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
               var c = ca[i];
               while (c.charAt(0) == ' ') {
                  c = c.substring(1);
               }
               if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
               }
            }
            return "";
         }

         function setClientId() {
            set30MinuteCookie(gaClientIdCookie, clientId);
            model.set('dimension' + 1, clientId);
         }

         function setSessionId() {
            var sessionId = getCookie(gaSessionIdCookie);
            if (sessionId === "") {
               sessionId = newSessionId;
            } else {
               sessionId = sessionId;
            }
            set30MinuteCookie(gaSessionIdCookie, sessionId);
            model.set('dimension' + 2, sessionId);
         }

         function setHitId() {
            set30MinuteCookie(gaHitIdCookie, newHitId);
            model.set('dimension' + 3, newHitId);
         }
         setClientId();
         setSessionId();
         setHitId();
      }
      setClientSessionAndHitId();
   }
}

~~~~

**Source: medium.com**

Make sure to check the "model.set(...)" part in the code and let it reflect the index from the previous step. So if session ID has index 2, then adjust the number to "+ 2".

{{< figure src="./images/google tag manager-custom variable-configuration.jpg" alt="Custom JavaScript variable configuration" title="Custom JavaScript variable configuration">}}

## 3rd step: Setup a GTM tag to send the information to Google Analytics

Now we need to send the ID information from the new variable to Google Analytics and make it available in the three dimensions. To do this, create a new tag with the following settings:
- Type "Google Analytics: Universal Analytics"
- Track type "Pageview"
- Tracking ID "Your Google Analytics Tracking ID"
- More settings -> fields to set -> field name "customTask", value "{{Session ID / Client ID / Hit ID}}"
- Trigger "All Pages"

{{< figure src="./images/google tag manager-tag configuration.jpg" alt="Google Tag Manager tag configuration" title="Google Tag Manager tag configuration">}}

Save the settings and check if everything works. The data should flow in immediately after setup and you should be able to create custom reports in Google Analytics to see the new custom dimensions.

## Conclusion

With this guide you should relatively quickly be able to track session ID, client ID and hit ID. Using three custom dimensions and a few GTM settings, you can start tracking the data. That data will give you and your colleagues more possibilities in custom reports to analyse customer journeys.

## Next steps

Now that you know how to set up the tracking, go ahead and try it out yourself if you're still using Universal Analytics. With GA4, there are slightly other steps involved, but it should be a similar approach. 
