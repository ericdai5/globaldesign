---
title: Text Expansion
description: Text Expansion
layout: ../../layouts/MainLayout.astro
---

Text Expansion happens during translation when the target language takes more space than the source language. Sometimes, it takes more characters or words from the target language to convey the same meaning as a few words from the source language. These differences stem from differences in vocabulary, grammar, sentence structure, and slang. For instance, translation from English to German can take at least 2 times the horizontal or vertical space. 

<br />
<div class="boxcontainer">
<img src="/language/airbnb3.png" title="Airbnb English" class="imagebox">
<img src="/language/airbnb4.png" title="Airbnb German" class="imagebox">
</div>
<p style="text-align: center">Airbnb's Q&A Page in English and German.</p>

## White Space

Have a good balance of white space so that the text will not be crammed as it expands. It is important to make sure that the final product design takes into account spatial changes so it can be free of crashes and bugs that could potentially come from translation. One way to address this problem is to adjust the padding settings.

## Grids and Columns

Avoid creating layouts where the grids and columns are too narrow such that only english text may fit. Certain languages like German include long compound words that have more than 30 characters.

## Paragraph Styles

Consistently implement well-defined character and paragraph styles. 

- Use less bold fonts because it will negatively impact readability.
- Use less italicized fonts because certain languages will not support it.
- Notice the factor of abbreviations. While abbreviations for things like time metrics are appropriate in certain languages like English, it is not appropriate in others.