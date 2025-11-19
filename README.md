## 1) Interfaces এবং Types — এর মধ্যে কিছু পার্থক্য 


### TypeScript-এ interface এর কাজ হলো


Object এর structure বা ডাটা কিভাবে রাখা হবে তা নির্ধারণ করে দেওয়া । 
মানে কোনো object-এর কি কি property থাকবে, সেগুলোর type কি হবে, optional হবে নাকি readonly হবে এসব কিছু নির্ধারণ করে দেওয়া। 
Interface মূলত একটা object কেমন হবে, Object-এর shape নির্ধারণ করা, Class-এর blueprint তৈরি করা, structure এবং design পরিষ্কার করা এবং
তার নিয়মসমূহ নির্ধারণ করে দেয়ার জন্য ব্যাবহার করা হয়।

অপরদিকে, 


### TypeScript-এ টাইপ এর কাজ হলো  


ডাটা কি ধরনের হবে (অ্যারে/বুলিয়ান/ স্ট্রিং/ নাম্বার)  এসব বলে দেওয়া । অর্থাৎ একটি মানের ধরন কি হবে তা নির্ধারণ করা এবং তাকে একটি নতুন নাম দিয়ে ব্যবহার করা। 
কোনো value বা object-এর ধরন নির্ধারণ করা। একাধিক ধরনের value একত্রিত করা (Union/Intersection)। কোডে type-safety নিশ্চিত করা। 


পরিশেষে আমরা  Interfaces এবং Types — এর মধ্যে কিছু পার্থক্য বলতে পারি যে, 

১/ interface এ declaration merging করা যায় কিন্তু types এ declaration merging করা সম্ভব নয়।


২/ Union,Intersection,Tuple,Primitive শুধুমাত্র type দিয়ে করা যায় কিন্তু এগুলো interface দিয়ে করা সম্ভব নয়।


৩/ object structure - type দিয়ে করা সম্ভব হলেও , interface ব্যাবহার করা সবচেয়ে ভাল । 


৪/ আবার interface দিয়ে  function এর type নির্ধারণ করা গেলেও, type ব্যাবহার করা সবচেয়ে ভাল। 








## 2) keyof এর কাজ


typescript এ keyof হল একটি TypeScript keyword, যা কোনো object type এর সমস্ত key গুলোকে একটি union type হিসেবে বের করে দেয়। 
কোনো object এর সকল key কে একটি string আকারে রিটার্ন করে। সহজভাবে বললে,কোন object-এর সব প্রপার্টি কী কী তা type হিসেবে পাওয়া যায়। 


## keyof ব্যাবহার করার কারন গুলো হলঃ 


১/ Object-এর key গুলোকে type হিসেবে পাওয়া


২/ keyof ব্যবহার করে ফাংশনটি নিশ্চিত করে যে শুধু valid keys ব্যবহার করা যাবে।


৩/ ভুল key দিলে compile-time এ error দেয় → কোড type-safe হয়।


৪/ Type-safe code: ভুল property ব্যবহার করা বন্ধ করা যায়।


৫/ Reusable functions: বিভিন্ন object type-এর জন্য একই function ব্যবহার করা যায়।


৬/ Maintainable code: Object structure বদলালে, corresponding type automatically update হয়।
 

