// Content for each of the 9 orbiting pandas' gift boxes.
// type can be: 'message' | 'image' | 'video' | 'audio'
//
// - message: just `message` text
// - image:   put the image inside public/images/ and set `imageSrc`,
//            an optional `caption` shows below it
// - video:   put the video inside public/videos/ and set `videoSrc`
// - audio:   put the file inside public/audio/ and set `audioSrc`
//            (works even if the file is an .mp4 that only has sound)

const giftContent = [
  {
    id: 1,
    type: 'message',
    title: 'Panda #1',
    message:
      'হাই পান্ডা, ❤️\nএতদিন আমাকে সহ্য করে, আমার পাশে থাকার জন্য তোমাকে অনেক অনেক ধন্যবাদ। আমি জানি না, আমি কীভাবে তোমাকে পেয়েছি… কিন্তু নিঃসন্দেহে তুমি আমার জীবনের সেরা উপহারগুলোর মধ্যে একজন।\nহয়তো আমি ভালো মেয়ে ছিলাম বলেই আল্লাহ তোমাকে আমার জীবনে উপহার হিসেবে পাঠিয়েছেন। 🥰\nআমি তোমার সাথে ভীষণ সুখী। তোমাকে পাশে পেয়ে আমি সত্যিই অনেক ভাগ্যবান।\nআমি তোমাকে অনেক ভালোবাসি। ❤️'
  },
  {
    id: 2,
    type: 'message',
    title: 'Panda #2',
    message:
      'ওইইই লক্ষ্মী জামাই, ❤️\nHappy Birthday to You! 🎂🥳💕\nআমার লক্ষ্মী জামাই, তোমার জন্মদিনে রইলো আমার বুকভরা ভালোবাসা, আদর আর অনেক অনেক শুভকামনা। 🥰❤️'
  },
  {
    id: 3,
    type: 'message',
    title: 'Panda #3',
    message:
      'তোমার টাকা দিয়ে শেখা Three.js-এর প্রথম project-টা তোমার birthday উপলক্ষে বানালাম! ❤️\nকি বলো, টাকা তো তাহলে উশুল হলো, তাই না? 😜😂\nBirthday gift হিসেবে এর চেয়ে ভালো investment আর কী হতে পারে বলো! 😏❤️'
  },
  {
    id: 4,
    type: 'image',
    title: 'Panda #4',
    imageSrc: '/images/angel.jpeg',
    caption:
      'এমনিতে আমার এত time নেই, সারাদিন একটু ভাব নিয়ে থাকি, Papa! 😏😂\nAnyways, Happy Birthday, Papa! 🎂🥳\nI wish you great success in your life and endless happiness. ❤️\nUmmah! 😘💋'
  },
  {
    id: 5,
    type: 'audio',
    title: 'Panda #5',
    caption: 'তোমার জন্য একটা গান... 🎶',
    audioSrc: '/audio/birthday_song.mp4'
  },
  {
    id: 6,
    type: 'video',
    title: 'Panda #6',
    caption: 'একটা ছোট্ট ডান্স সারপ্রাইজ! 💃',
    videoSrc: '/videos/dance.mp4'
  },
  {
    id: 7,
    type: 'message',
    title: 'Panda #7',
    message:
      'জানো তো, প্রতিটা পান্ডা ঘুরে ঘুরে তোমার কাছে একটা করে কথা নিয়ে আসছে... 🐼\nএই পান্ডাটা এসেছে একটা ছোট্ট প্রমিজ নিয়ে — তোমার প্রতিটা birthday-তে আমি ঠিক এভাবেই পাশে থাকব, হয়তো আরও একটু বেশি পাগলামি নিয়ে। 😄❤️\nতোমাকে হাসাতে হাসাতে বুড়ো করে ফেলব, দেখে নিও! 😜'
  },
  {
    id: 8,
    type: 'video',
    title: 'Panda #8',
    caption: 'তোমার জন্য আরেকটা ছোট্ট surprise... 🎬',
    videoSrc: '/videos/birthday_wish.mp4'
 },
  {
    id: 9,
    type: 'message',
    title: 'Panda #9',
    message:
      'শেষ পান্ডাটা এসেছে সবচেয়ে বড় কথাটা বলতে... 🐼✨\nHappy Birthday, আমার সবচেয়ে প্রিয় মানুষ। তোমাকে ঘিরে যত পান্ডা, যত তারা, যত রঙিন কনফেটি — সব মিলিয়েও তোমার প্রতি আমার ভালোবাসার সমান হবে না।\nজন্মদিনটা তোমার হোক হাসি, ভালোবাসা আর ছোট্ট ছোট্ট খুশিতে ভরা। 🎉🐼💖\nI love you, always and forever.'
  }
]

export default giftContent