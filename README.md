## 1) Interfaces এবং Types — এর মধ্যে কিছু পার্থক্য 

interface একাধিকবার একই নামে ঘোষণা করলে TypeScript সেগুলোকে merge করে types এ এটা সম্ভব নয়।


Union,Intersection,Tuple,Primitive  শুধুমাত্র type দিয়ে করা যায় । এগুলো interface দিয়ে করা সম্ভব নয়।

## 2) keyof এর কাজ


keyof কোনো object এর সকল key কে একটি string আকারে রিটার্ন করে।
