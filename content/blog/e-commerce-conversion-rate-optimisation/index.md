---
author: "Fabian Engeln"
title: "E-Commerce Conversion Rate Optimisation"
date: 2022-06-03
description: "In this article, you will learn what measures you can take in your product discovery functionalities to optimise your e-commerce conversion rate."
tags: ["conversion rate","analytics","optimisation"]
thumbnail: ecommerce-conversion-rate-optimisation.jpg
---

Increasing sales is the goal of any business. From digital startup founders to executives in large e-commerce companies. Everyone is looking for ways how to make more money. Yet, people often don't know where to start looking for conversion rate optimisation.

In a jungle of collected customer statistics, businesses are often unsure how to use the information. The analysis the influencing factors for an improved conversion KPI are not straightforward.

## What is a conversion rate?

For every business, the understanding of a conversion rate can be different. In e-commerce, this is often related to online sales. Then it calculates as the ratio of number of site visitors versus number of purchasers:

{{< figure src="./images/conversion-rate-formula.png" alt="E-Commerce Conversion Rate Calculation" title="E-Commerce Conversion Rate Formula">}}

## Decide on the optimisation KPI

So, the first step is creating clarity what conversion rate is important for you. Only then, you will be able to take specific measures based on the right data. In this post I will focus on the optimisation for a product-focused business in e-commerce. Another post will cover the optimisation tactics for a content-focused business. Thus, optimising content-related conversion rates may also apply to the e-commerce business.

Thus, let's assume: the E-Commerce business wants to optimise its e-commerce conversion rate.

## E-Commerce conversion rate optimisation

After defining the optimisation KPI, it is now time to explore how to improve it. In E-Commerce, the products displayed on the site are in focus when looking for optimisations. Products are in recommendation sliders, category lister pages and search result pages. Getting closer to the sale, they are on detail pages, the basket page and in the order summary. The type of products shown will influence the buying decision of the user. The more relevant the product gets, the more likely the customer will buy it. But how is relevancy defined?

In the following, I'll give an overview of different website page types and their specific relevancy KPIs.

### Homepage

Here, you could include sliders with relevant products. Generally, new products, sale products and bestsellers are working well. For more relevance, you can show products representing the favourite colour or gender of the customer. Other common practices are showing last clicked products or products from the last clicked category. The precondition is that this data is available via a user profile or in the session.

One example is Blue Tomato. They show bestsellers on their homepage and also engage in personalisation. I browsed through some Vans shoes which triggered related Vans products to appear on the homepage:

{{< figure src="./images/bluetomato-conversion-rate-optimisation.jpg" alt="How Blue-Tomato optimises its e-commerce conversion rate via recommendations" title="Blue-Tomato's Conversion Optimisation Techniques">}}

How to measure this? You can do this only by implementing a custom tracking event on the product sliders. Then you can get something like a homepage slider usage rate = homepage slider clicks / no. homepage visitors. Optimising this KPI via the above measures will ultimately improve the e-commerce conversion rate.

### Product lister pages

Product lister pages can be search result pages and category lister pages. Breadcrumbs, filters, product rankings, sorting options and product display are elements for optimisation. The following questions can help to create a good baseline setup:

- **Breadcrumbs**: How can breadcrumbs guide the user and improve orientation? How could you display category and filter breadcrumbs in a different way?
- **Filters**: What are filters which should appear everywhere, regardless of the category? What are category specific filters and can they only come up where needed? How should you sort filters? How should values appear? How can filter value rankings offer the highest relevance? E.g. in the brand filter, sort by revenue of the brand.
- **Product rankings**: What analytics data like clicks on products can you use? What logistical information do you need to use? E.g. availabilities and stock levels. What business related relevance factors are there to promote products?
- **Sorting options**: What sorting options should be there to the site users? E.g. user rating, bestsellers.
- **Product display**: Which product attributes are relevant to the user? Are there badges which can improve orientation and UX?

Decathlon has a thought-through lister page. It is evident that they spent a reasonable amount of time thinking about the above topics:

{{< figure src="./images/decathlon-conversion-rate-optimisation.jpg" alt="How Decathlon optimises its e-commerce conversion rate via lister pages" title="Decathlon improves Conversions via highly usable Lister Page Elements">}}

Modern product discovery solutions usually offer a built-in tracker. This can give insights into the performance of filters, product rankings and products. Examples are [Attraqt Fredhopper](https://www.attraqt.com/), [Algolia](https://www.algolia.com/), [Empathy](https://www.empathy.co/) and [Bloomreach Discovery](https://www.bloomreach.com/en/products/discovery).

Moreover, you should implement Google Analytics E-Commerce tracking. This will not only give you valuable insights into product performance. It can also help you to setup an automated feedback loop from Google Analytics into your product discovery solution. Using metrics like *productDetailViews*, *productAddsToCart*, *uniquePurchases* and *itemRevenue*, product rankings can be optimised. This will make sure to that whilst users are interacting with the site, it is automatically optimising the e-commerce conversion rate.

### Detail page

The detail page is another area where you can improve the conversion rate. You should have good quality product pictures, so that customers can imagine the product better. Also product descriptions of features, as well as a clear visualisation of product variants are vital. In the best case a user will add the product to the basket. He may also be unsure about the purchase. In that case it is vital to suggest further products as inspiration and get that "I want to buy that product" moment in the customer's mind. Some possibilities:

- **Alternative products**: Are there ways to recommend alternatives to the currently shown product? For example, via similar attributes like category, colour, gender, size.
- **Fitting products**: Are there products which fit to the currently shown product? For fashion, this could be "shop the look", for electronics accessories or spare parts. Via Google Analytics you can find which products have been viewed, added to basket and purchased in the same sessions.
- **Personalised products**: Is there available data to recommend products based on the shoppers' preferences or browsing history?

Sportscheck is one example, where alternative and fitting products complement the shown product. The alternative products show prices which are higher than the shown product. This can help for you to sell products with higher margins.

{{< figure src="./images/sportscheck-conversion-rate-optimisation-1.jpg" alt="How Sportscheck optimises its E-Commerce Conversion Rate via relevant PDP Product Recommendations 1">}}
{{< figure src="./images/sportscheck-conversion-rate-optimisation-2.jpg" alt="How Sportscheck optimises its E-Commerce Conversion Rate via relevant PDP Product Recommendations 2" title="Sportscheck optimises its Conversion Rate via Product Recommendations">}}

There are other modern technologies which are using machine learning to generate recommendations. For example, you could use a visual similarity algorithm to generate alternatives based on visual aspects. One standard solution provider in this area is [Ximilar](https://ximilar.com). 

### Onsite search optimisation

E-Commerce experts say that the conversion rate for shoppers using the onsite search is around 65% higher (eConsultancy). This shows that a good onsite search is vital to leverage this potential. A couple of Google Analytics reports can help to identify issues in onsite search and resolve those:

- **Search terms / No. of searches**: This report will show you your most popular search terms. You can optimise the results for those via synonyms and redirects. You can also show banners and other visual elements to make results more appealing.
- **Search terms with 0 results / No. of searches**: This report will let you analyse which terms users search for and get no results. Optimisations can be the creation of synonyms, redirects or reviewing the product catalog.
- **Search terms / No. of search refinements**: Here you see how often users executed further searches after the first one. The less searches needed to achieve the goal of the purchase, the better. So a high number of refinements for a specific term means a low relevance of search results. Try to review product data and improve the relevance.
- **Search terms / Conversion rate per search term**: This shows in which sessions with a specific search term users did a purchase or didn't. In focus should be those terms with a low conversion rate which again is a sign of low relevance. Look for ways to improve the results by reviewing what products are coming up.

The number of searches per term can provide another relevance factor for the latter three reports.


## Conclusion

The ways to improve the e-commerce conversion rate are vast. With focus on product discovery, this post offers some ideas to approach this topic. Creating a good baseline in this area is important. After all, keep in mind that optimising homepage recommendations, lister pages, detail pages and your onsite search is a continuous process. As an e-commerce business, you need to have a dedicated person for product discovery who spends a part of his/her time on this topic.

## Next steps
Now I have given some insights on how you can approach the topic of conversion rate optimisation in e-commerce. Go ahead and try out some of the suggested methods. Feel free to share your thoughts in the comment section below.
