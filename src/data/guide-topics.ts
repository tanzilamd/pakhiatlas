export const guideTopics = [
  {id:'getting-started',en:'Getting started & planning',bn:'শুরু করার প্রস্তুতি',descriptionEn:'Choosing, bringing home, buying and arranging backup care.',descriptionBn:'বাছাই, ঘরে আনা, বাজেট ও বিকল্প দেখাশোনার প্রস্তুতি।'},
  {id:'feeding',en:'Food & nutrition',bn:'খাবার ও পুষ্টি',descriptionEn:'Build the whole feeding plan, not just a seed list.',descriptionBn:'শুধু বীজের তালিকা নয়, পুরো খাবারের পরিকল্পনা।'},
  {id:'everyday',en:'Housing & daily care',bn:'বাসস্থান ও দৈনন্দিন যত্ন',descriptionEn:'A safer home, a workable routine and seasonal care.',descriptionBn:'নিরাপদ ঘর, নিয়মিত পরিচর্যা ও ঋতু অনুযায়ী প্রস্তুতি।'},
  {id:'behaviour',en:'Behaviour & companionship',bn:'আচরণ ও সঙ্গ',descriptionEn:'Trust, enrichment and introductions at the bird’s pace.',descriptionBn:'পাখির স্বস্তি বুঝে আস্থা, ব্যস্ততা ও পরিচয় গড়ে তোলা।'},
  {id:'health',en:'Health & warning signs',bn:'স্বাস্থ্য ও সতর্কসংকেত',descriptionEn:'Observe changes and know when professional help is needed.',descriptionBn:'পরিবর্তন খেয়াল করুন, কখন চিকিৎসকের সাহায্য দরকার বুঝুন।'},
  {id:'breeding',en:'Breeding & welfare',bn:'প্রজনন ও কল্যাণ',descriptionEn:'Consider readiness and responsibility before nesting.',descriptionBn:'বাসা দেওয়ার আগে প্রস্তুতি ও দায়িত্ব ভেবে দেখুন।'},
  {id:'wildlife',en:'Wild birds & conservation',bn:'বন্য পাখি ও সংরক্ষণ',descriptionEn:'Identification and observation with wildlife left in nature.',descriptionBn:'প্রকৃতিতে রেখেই পাখি চেনা ও আচরণ দেখা।'},
] as const;
export type GuideTopic = typeof guideTopics[number]['id'];
export const topicIds = guideTopics.map(topic=>topic.id) as [GuideTopic,...GuideTopic[]];
