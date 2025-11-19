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

interface একাধিকবার একই নামে ঘোষণা করলে TypeScript সেগুলোকে merge করে types এ এটা সম্ভব নয়।
Union,Intersection,Tuple,Primitive শুধুমাত্র type দিয়ে করা যায় । এগুলো interface দিয়ে করা সম্ভব নয়।

## 2) keyof এর কাজ


keyof কোনো object এর সকল key কে একটি string আকারে রিটার্ন করে।
