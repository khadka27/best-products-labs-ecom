const html = `<div class="faq-block-wrapper" data-faqs="[{&quot;q&quot;:&quot;question 1?&quot;,&quot;a&quot;:&quot;answer 1&amp;2&quot;}]"></div>`;
const regex = /data-faqs="([^"]+)"/g;
let match;
const allFaqs = [];
while ((match = regex.exec(html)) !== null) {
  const raw = match[1];
  const decoded = raw.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  allFaqs.push(...JSON.parse(decoded));
}
console.log(allFaqs);
