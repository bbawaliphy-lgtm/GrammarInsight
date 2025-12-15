// This file contains all 120 Grammar Rules with detailed Bengali explanations
// It is loaded by both the Main App and the Quiz App

const rulesData = [
    { 
        id: 1, 
        title: "Subject–Verb Agreement", 
        subtitle: "Singular → Singular, Plural → Plural", 
        icon: "fa-user-check", 
        concept: "বাক্যের Subject-এর number (বচন) অনুযায়ী Verb নির্ধারিত হয়। সহজ কথায়, Subject যদি Singular (একবচন) হয়, তবে Verb-ও Singular হবে। আর Subject যদি Plural (বহুবচন) হয়, তবে Verb-ও Plural হবে।", 
        examples: [
            { en: "The boy plays cricket.", bn: "এখানে Subject 'The boy' একজন (Singular), তাই Verb 'play'-এর সাথে 's' যুক্ত হয়ে 'plays' (Singular) হয়েছে।", rule: "S-S Agreement" }, 
            { en: "The boys play cricket.", bn: "এখানে Subject 'The boys' অনেকে (Plural), তাই Verb 'play' তার মূল ফর্মে (Plural) বসেছে।", rule: "P-P Agreement" }, 
            { en: "My friend and his brother are coming.", bn: "'and' দ্বারা যুক্ত দুটি Subject (Friend এবং Brother) মিলে Plural হয়েছে, তাই Verb 'are' বসেছে।", rule: "Compound Subject" }
        ] 
    },
    { 
        id: 2, 
        title: "Plural Noun Formation", 
        subtitle: "Regular & Irregular Rules", 
        icon: "fa-layer-group", 
        concept: "সাধারণত Noun-এর শেষে s বা es যোগ করে plural করা হয় (Regular), কিন্তু কিছু শব্দ সম্পূর্ণ বদলে যায় (Irregular) যা কোনো নির্দিষ্ট নিয়ম মানে না, তাই এগুলো মুখস্ত রাখতে হয়।", 
        examples: [
            { en: "Book → books", bn: "Book শব্দটি একটি সাধারণ Noun, তাই এর শেষে শুধু 's' যোগ করে Plural করা হয়েছে।", rule: "Regular" }, 
            { en: "Bus → buses", bn: "Bus শব্দটির শেষে 's' আছে, তাই নিয়ম অনুযায়ী 'es' যোগ করে Plural (buses) করা হয়েছে।", rule: "Ending Rule" }, 
            { en: "Child → children", bn: "Child হলো Irregular Noun, তাই 's' যোগ না হয়ে পুরো শব্দটি বদলে 'children' হয়েছে।", rule: "Irregular" }
        ] 
    },
    { 
        id: 3, 
        title: "Many vs Much", 
        subtitle: "Countable vs Uncountable", 
        icon: "fa-scale-balanced", 
        concept: "যেসব Noun গণনা করা যায় (Countable Noun), তাদের সংখ্যার আধিক্য বোঝাতে 'Many' বসে। আর যা গণনা করা যায় না কিন্তু পরিমাপ করা যায় (Uncountable Noun), তাদের ক্ষেত্রে 'Much' বসে।", 
        examples: [
            { en: "I don’t have many books.", bn: "Books গণনা করা যায় (Countable), তাই এর আগে 'many' বসেছে।", rule: "Countable" }, 
            { en: "There isn’t much water.", bn: "Water গণনা করা যায় না (Uncountable), তাই এর আগে 'much' বসেছে।", rule: "Uncountable" }, 
            { en: "Many mistakes, not much progress.", bn: "Mistakes গোনা যায় তাই 'Many', কিন্তু Progress (উন্নতি) গোনা যায় না তাই 'Much' বসেছে।", rule: "Mixed" }
        ] 
    },
    { 
        id: 4, 
        title: "Articles – A/An vs The", 
        subtitle: "General vs Specific Usage", 
        icon: "fa-a", 
        concept: "অনির্দিষ্ট কোনো ব্যক্তি বা বস্তুর কথা বললে A বা An বসে। কিন্তু বক্তা ও শ্রোতা উভয়েই চেনে বা জানে এমন নির্দিষ্ট (Specific) কোনো ব্যক্তি বা বস্তুর কথা বললে তার আগে The বসে।", 
        examples: [
            { en: "I saw a dog.", bn: "এখানে রাস্তায় দেখা যেকোনো একটি কুকুরের কথা বলা হয়েছে, তাই 'a' বসেছে।", rule: "General" }, 
            { en: "The dog is barking.", bn: "এখানে একটি নির্দিষ্ট কুকুরের কথা বলা হচ্ছে (হয়তো যেটি পোষা), তাই 'The' বসেছে।", rule: "Specific" }, 
            { en: "An umbrella.", bn: "Umbrella শব্দটি Vowel sound (আ) দিয়ে শুরু, তাই 'An' বসেছে।", rule: "Phonetic" }
        ] 
    },
    { 
        id: 5, 
        title: "Mandatory Use of “The”", 
        subtitle: "Rivers, Holy Books, Superlatives", 
        icon: "fa-star", 
        concept: "নদী, সাগর, মহাসাগর, পর্বতমালা, ধর্মগ্রন্থ, পত্রিকা এবং Superlative degree-এর আগে সর্বদা 'The' ব্যবহার করা বাধ্যতামূলক।", 
        examples: [
            { en: "The Ganga is sacred.", bn: "Ganga একটি নদীর নাম, তাই তার আগে 'The' বসেছে।", rule: "River" }, 
            { en: "She is the best student.", bn: "'best' হলো Superlative Degree, তাই তার আগে সর্বদা 'the' বসে।", rule: "Degree" }, 
            { en: "He reads the Bible.", bn: "Bible একটি পবিত্র ধর্মগ্রন্থ, তাই এর নামের আগে 'the' বসানো হয়েছে।", rule: "Holy Book" }
        ] 
    },
    { 
        id: 6, 
        title: "Tense Consistency", 
        subtitle: "Same time-frame = Same tense", 
        icon: "fa-timeline", 
        concept: "একই বাক্যে বা ঘটনার বর্ণনায় Tense হঠাৎ পরিবর্তন করা যাবে না। যদি ঘটনার সময়কাল (Time-frame) একই হয়, তবে পুরো বাক্যে একই Tense বজায় রাখতে হবে।", 
        examples: [
            { en: "He came and sat beside me.", bn: "সে এসেছিল (came - Past) এবং বসেছিল (sat - Past)। দুটিই অতীতের ঘটনা তাই Tense একই রাখা হয়েছে।", rule: "Tense Match" }, 
            { en: "He comes and sits beside me.", bn: "সে আসে (comes - Present) এবং বসে (sits - Present)। দুটিই বর্তমানের অভ্যাস তাই Tense একই।", rule: "Uniformity" }, 
            { en: "I was walking and thinking.", bn: "হাঁটা এবং চিন্তা করা—দুটি কাজই অতীতে একই সাথে চলছিল, তাই উভয় ক্ষেত্রেই Continuous Tense ব্যবহৃত হয়েছে।", rule: "Continuous Action" }
        ] 
    },
    { 
        id: 7, 
        title: "Present Perfect", 
        subtitle: "Past Action + Present Effect", 
        icon: "fa-clock-rotate-left", 
        concept: "কোনো কাজ অতীতে শেষ হয়েছে কিন্তু তার ফলাফল বা প্রভাব এখনো বর্তমানে বিদ্যমান, এমন ক্ষেত্রে Present Perfect Tense (have/has + V3) ব্যবহৃত হয়।", 
        examples: [
            { en: "I have finished my work.", bn: "কাজটি শেষ হয়ে গেছে, কিন্তু তার প্রভাব বা রেশ এখনো আছে (আমি এখন অবসর)।", rule: "Present Relevance" }, 
            { en: "She has lost her phone.", bn: "ফোনটি হারিয়ে গেছে এবং এখনো খুঁজে পাওয়া যায়নি (হারানোর প্রভাব বর্তমান)।", rule: "Active Result" }, 
            { en: "They have moved to Kolkata.", bn: "তারা অতীতে কোলকাতায় চলে গেছে এবং বর্তমানেও সেখানেই আছে।", rule: "Recent Change" }
        ] 
    },
    { 
        id: 8, 
        title: "Past Perfect", 
        subtitle: "Earlier Past vs Later Past", 
        icon: "fa-backward-step", 
        concept: "অতীতে দুটি কাজ সম্পন্ন হলে, যে কাজটি অপেক্ষাকৃত আগে ঘটেছে তার জন্য Past Perfect (had + V3) এবং যেটি পরে ঘটেছে তার জন্য Simple Past ব্যবহৃত হয়।", 
        examples: [
            { en: "He had left before I reached.", bn: "আমি পৌঁছানোর আগেই সে চলে গিয়েছিল। 'সে চলে গেছে' ঘটনাটি আগে ঘটেছে, তাই 'had left' বসেছে।", rule: "Earlier Past" }, 
            { en: "They had eaten before she came.", bn: "তার আসার আগেই তারা খেয়ে নিয়েছিল। খাওয়া আগে হয়েছে, তাই 'had eaten'।", rule: "Sequence" }, 
            { en: "The train had started before we arrived.", bn: "আমাদের পৌঁছানোর আগেই ট্রেন ছেড়ে দিয়েছিল (আগের ঘটনা), তাই 'had started'।", rule: "Timeline" }
        ] 
    },
    { 
        id: 9, 
        title: "Will vs Going to", 
        subtitle: "Decision vs Plan vs Evidence", 
        icon: "fa-forward", 
        concept: "কথা বলার মুহূর্তে নেওয়া সিদ্ধান্তে 'Will' ব্যবহৃত হয়। কিন্তু আগে থেকে পরিকল্পনা করা থাকলে বা কোনো প্রমাণ (Evidence) দেখে ভবিষ্যৎবাণী করলে 'Going to' ব্যবহৃত হয়।", 
        examples: [
            { en: "I will call you later.", bn: "কথা বলার মুহূর্তে এই সিদ্ধান্ত নেওয়া হয়েছে, তাই 'will' বসেছে।", rule: "Instant Decision" }, 
            { en: "I am going to visit Delhi.", bn: "দিল্লি যাওয়ার পরিকল্পনা আগে থেকেই ঠিক করা ছিল, তাই 'going to' বসেছে।", rule: "Planned Action" }, 
            { en: "It is going to rain.", bn: "আকাশে মেঘ দেখে বৃষ্টির লক্ষণ বোঝা যাচ্ছে (প্রমাণ), তাই 'going to' ব্যবহৃত হয়েছে।", rule: "Evidence Based" }
        ] 
    },
    { 
        id: 10, 
        title: "Modals & Base Verb", 
        subtitle: "Can, Could, May, Will + V1", 
        icon: "fa-anchor", 
        concept: "যেকোনো Modal verb (যেমন: can, could, may, might, shall, should, will, would, must)-এর পর সর্বদা মূল Verb-এর Base form (V1) বসে। এস/ইএস বা আইএনজি যুক্ত হয় না।", 
        examples: [
            { en: "She can swim.", bn: "Can-এর পরে 'swim' (V1) বসেছে। 'swims' বা 'swimming' হবে না।", rule: "Modal + Base" }, 
            { en: "He may come today.", bn: "May-এর পরে 'come' (V1) বসেছে। Subject 'He' হওয়া সত্ত্বেও 'comes' হয়নি।", rule: "Base Form" }, 
            { en: "It might rain.", bn: "Might-এর পরে Verb-এর সাথে s/es যোগ করা যায় না, তাই শুধু 'rain' বসেছে।", rule: "No S/ES" }
        ] 
    },
    { 
        id: 11, 
        title: "Conditionals (Type-1 & 2)", 
        subtitle: "Real vs Unreal Conditions", 
        icon: "fa-arrows-split-up-and-left", 
        concept: "Type-1 (বাস্তব): If + Present Tense থাকলে পরের অংশে will + V1 হয়। Type-2 (অবাস্তব/কল্পনা): If + Past Tense থাকলে পরের অংশে would + V1 হয়।", 
        examples: [
            { en: "If you study, you will pass.", bn: "শর্তটি বাস্তব—পড়াশোনা করলে পাস করবে। তাই If+Present এর সাথে Future (will) বসেছে।", rule: "If + Present → Will" }, 
            { en: "If I were rich, I would travel.", bn: "এটি একটি কল্পনা (আমি ধনী নই)। তাই If+Past (were) এর সাথে would বসেছে।", rule: "If + Past → Would" }, 
            { en: "If it rains, we will stay home.", bn: "ভবিষ্যতে বৃষ্টি হওয়ার সম্ভাবনা আছে, তাই এটি Type-1 Conditional।", rule: "Realistic Future" }
        ] 
    },
    { 
        id: 12, 
        title: "“Than” Takes Object Pronouns", 
        subtitle: "Use me/him/us/them after Than", 
        icon: "fa-people-arrows", 
        concept: "আধুনিক এবং সাধারণ ইংরেজিতে তুলনা করার সময় 'Than'-এর পরে সাধারণত Object pronoun (me, him, her, us, them) বসে। Subject form ব্যবহার করা ফরমাল।", 
        examples: [
            { en: "He is taller than me.", bn: "কথ্য বা সাধারণ ইংরেজিতে Than-এর পর 'I' না বসিয়ে Object form 'me' বসানো হয়।", rule: "Object Pronoun" }, 
            { en: "She is stronger than him.", bn: "এখানে 'She is stronger than he' খুব বেশি ফরমাল, তাই সাধারণত 'him' ব্যবহার করা হয়।", rule: "Objective Case" }, 
            { en: "They are better than us.", bn: "তুলনা বোঝাতে Than-এর পর 'we'-এর পরিবর্তে 'us' বসেছে।", rule: "Objective Case" }
        ] 
    },
    { 
        id: 13, 
        title: "No Double Comparative", 
        subtitle: "Avoid 'More Better' or 'Most Highest'", 
        icon: "fa-ban", 
        concept: "একই শব্দে দুবার Comparative বা Superlative ব্যবহার করা যাবে না। যেমন 'More Better' বা 'Most Highest' বলা ভুল, কারণ Better নিজেই Comparative।", 
        examples: [
            { en: "❌ more better → ✔ better", bn: "Better শব্দটি নিজেই Comparative, তাই এর আগে আবার 'more' বসানো ভুল।", rule: "No Double Comp" }, 
            { en: "❌ more stronger → ✔ stronger", bn: "Stronger নিজেই 'More strong' অর্থ বহন করে, তাই বাড়তি 'more' প্রয়োজন নেই।", rule: "No Double Comp" }, 
            { en: "❌ most highest → ✔ highest", bn: "Highest শব্দটিই সর্বোচ্চ পর্যায়, তাই 'most' ব্যবহার করে পুনরাবৃত্তি করা ভুল।", rule: "No Double Super" }
        ] 
    },
    { 
        id: 14, 
        title: "Each vs Every", 
        subtitle: "Always Singular Noun & Verb", 
        icon: "fa-check-double", 
        concept: "Each এবং Every সর্বদা Singular অর্থ বহন করে। তাই এদের পরে Noun এবং Verb দুটোই সর্বদা Singular হতে হবে, প্লুরাল হতে পারবে না।", 
        examples: [
            { en: "Each student has a notebook.", bn: "Each থাকার কারণে 'students' বা 'have' হয়নি। Student (Singular) এবং has (Singular) হয়েছে।", rule: "Singular Verb" }, 
            { en: "Every boy is present.", bn: "Every-এর পর সর্বদা Singular Noun (boy) বসে, তাই Verb-ও Singular (is) হয়েছে।", rule: "Singular Structure" }, 
            { en: "Each of them is responsible.", bn: "Each of-এর পর Noun/Pronoun plural (them) হলেও Verb সর্বদা Singular (is) হয়।", rule: "Each of + Plural" }
        ] 
    },
    { 
        id: 15, 
        title: "Either / Neither", 
        subtitle: "Singular Verb & Proximity Rule", 
        icon: "fa-left-right", 
        concept: "Either এবং Neither সাধারণত Singular Verb নেয়। তবে 'OR' বা 'NOR' দিয়ে যুক্ত থাকলে Verb তার সবচেয়ে কাছের Subject অনুযায়ী (Proximity Rule) বসবে।", 
        examples: [
            { en: "Either of the books is good.", bn: "বইগুলোর 'যেকোনো একটি' বোঝানো হচ্ছে, তাই Verb Singular (is) হয়েছে।", rule: "Singular Meaning" }, 
            { en: "Neither answer is correct.", bn: "কোনো উত্তরই সঠিক নয় (একটিও না), তাই Singular Verb বসেছে।", rule: "Singular Meaning" }, 
            { en: "Either Ravi or his friends are coming.", bn: "এখানে Verb 'are'-এর কাছের Subject হলো 'friends' (Plural), তাই Verb-ও Plural হয়েছে।", rule: "Proximity Rule" }
        ] 
    },
    { 
        id: 16, 
        title: "Between vs Among", 
        subtitle: "Two vs More than Two", 
        icon: "fa-users-between-lines", 
        concept: "দুইজন ব্যক্তি বা বস্তুর মধ্যে কিছু ভাগ করতে বা বোঝাতে 'Between' বসে। কিন্তু তিন বা তার বেশি জনের মধ্যে হলে 'Among' ব্যবহার করতে হয়।", 
        examples: [
            { en: "Divide it between you and me.", bn: "এখানে 'You' এবং 'Me' মাত্র দুইজন ব্যক্তি, তাই 'Between' বসেছে।", rule: "Two Entities" }, 
            { en: "Share among the children.", bn: "Children বলতে দুইয়ের অধিক শিশুকে বোঝানো হয়েছে, তাই 'Among' বসেছে।", rule: "3+ Entities" }, 
            { en: "Fight between two groups.", bn: "নির্দিষ্ট করে দুটি দলের কথা বলা হয়েছে, তাই 'Between' ব্যবহৃত হয়েছে।", rule: "Two Entities" }
        ] 
    },
    { 
        id: 17, 
        title: "Very vs Much", 
        subtitle: "Adjective vs Comparative", 
        icon: "fa-sliders", 
        concept: "'Very' সাধারণত Positive degree-এর Adjective বা Adverb-কে মডিফাই করে (Very good)। কিন্তু Comparative degree বা Participle-এর আগে 'Much' বসে (Much better)।", 
        examples: [
            { en: "She is very happy.", bn: "Happy হলো Positive Degree-এর Adjective, তাই এর তীব্রতা বোঝাতে 'Very' বসেছে।", rule: "Very + Adj" }, 
            { en: "She is much happier today.", bn: "Happier হলো Comparative Degree, তাই এর আগে 'Very' না বসে 'Much' বসেছে।", rule: "Much + Comp" }, 
            { en: "He was much surprised.", bn: "Surprised একটি Past Participle যা Adjective-এর মতো কাজ করছে, তাই 'Much' বসেছে।", rule: "Much + Participle" }
        ] 
    },
    { 
        id: 18, 
        title: "Few vs A Few vs The Few", 
        subtitle: "Countable Noun Usage", 
        icon: "fa-arrow-down-short-wide", 
        concept: "Countable Noun-এর ক্ষেত্রে: 'Few' = প্রায় নেই (Negative)। 'A few' = অল্প কিছু আছে (Positive)। 'The few' = যে সামান্য কজন আছে তার সবাই।", 
        examples: [
            { en: "I have few friends.", bn: "আমার বন্ধু 'নেই বললেই চলে' (নেতিবাচক অর্থে) বোঝাতে 'few' ব্যবহৃত হয়েছে।", rule: "Few (Negative)" }, 
            { en: "I have a few friends.", bn: "আমার 'অল্প কিছু' বন্ধু আছে (ইতিবাচক অর্থে) বোঝাতে 'a few' বসেছে।", rule: "A Few (Some)" }, 
            { en: "The few friends I have are loyal.", bn: "আমার যে কজন বন্ধু আছে, তাদের 'সবাই' বিশ্বস্ত—এই অর্থে 'The few' বসেছে।", rule: "The Few (All)" }
        ] 
    },
    { 
        id: 19, 
        title: "Little vs A Little vs The Little", 
        subtitle: "Uncountable Noun Usage", 
        icon: "fa-glass-water", 
        concept: "Uncountable Noun-এর ক্ষেত্রে: 'Little' = প্রায় নেই (Negative)। 'A little' = অল্প কিছু আছে (Positive)। 'The little' = যেটুকু আছে তার সবটুকুই।", 
        examples: [
            { en: "I have little money.", bn: "আমার কাছে টাকা 'নেই বললেই চলে', তাই 'little' বসেছে।", rule: "Little (Negative)" }, 
            { en: "I have a little money.", bn: "আমার কাছে 'সামান্য' টাকা আছে, তাই 'a little' বসেছে।", rule: "A Little (Some)" }, 
            { en: "The little money I had was stolen.", bn: "আমার কাছে যেটুকু সামান্য টাকা ছিল তার 'পুরোটাই' চুরি হয়েছে, তাই 'The little' বসেছে।", rule: "The Little (All)" }
        ] 
    },
    { 
        id: 20, 
        title: "Gerund vs Infinitive", 
        subtitle: "Meaning Change", 
        icon: "fa-person-running", 
        concept: "Verb+ing (Gerund) কোনো কাজ বা অভ্যাস বোঝায়। কিন্তু To+verb (Infinitive) কোনো কাজের উদ্দেশ্য বা কারণ বোঝাতে ব্যবহৃত হয়।", 
        examples: [
            { en: "Stop smoking.", bn: "'ধূমপান করা' কাজটি বন্ধ করো—এখানে কাজটিকেই নির্দেশ করা হচ্ছে, তাই Gerund (smoking) বসেছে।", rule: "Stop + Gerund" }, 
            { en: "Stop to smoke.", bn: "'ধূমপান করার জন্য' থামো—এখানে থামার উদ্দেশ্য ধূমপান করা, তাই Infinitive (to smoke) বসেছে।", rule: "Stop + Infinitive" }, 
            { en: "I love reading.", bn: "এখানে পড়া (Reading) আমার একটি শখ বা অভ্যাস, তাই Gerund বসেছে।", rule: "Love + Gerund" }
        ] 
    },
    { 
        id: 21, 
        title: "Prepositions: at / in / on", 
        subtitle: "Time & Place Usage", 
        icon: "fa-location-dot", 
        concept: "at = নির্দিষ্ট বিন্দু বা পয়েন্ট (point) বা নির্দিষ্ট সময়, in = কোনো কিছুর ভেতরে বা বড় এলাকা (city/country), on = কোনো কিছুর উপর (surface) বা নির্দিষ্ট দিন/তারিখ।", 
        examples: [
            { en: "He lives in Kolkata.", bn: "কলকাতা একটি বড় শহর বা এলাকা, তাই এর আগে 'in' বসেছে।", rule: "Container/Area" }, 
            { en: "I will meet you at 5 PM.", bn: "বিকাল ৫টা একটি নির্দিষ্ট সময় বিন্দু (Point of time), তাই 'at' বসেছে।", rule: "Specific Point" }, 
            { en: "The book is on the table.", bn: "বইটি টেবিলের উপরিতলে (Surface) স্পর্শ করে আছে, তাই 'on' ব্যবহৃত হয়েছে।", rule: "Surface" }
        ] 
    },
    { 
        id: 22, 
        title: "Preposition Collocations", 
        subtitle: "Fixed Prepositions", 
        icon: "fa-link", 
        concept: "কিছু শব্দের সাথে Preposition নির্দিষ্ট থাকে। যেমন: বড় জায়গায় 'arrive in', ছোট নির্দিষ্ট জায়গায় 'arrive at', এবং রোগে মারা গেলে 'died of' বসে।", 
        examples: [
            { en: "They arrived in India.", bn: "ইন্ডিয়া একটি দেশ (বড় জায়গা), তাই Arrive-এর পর 'in' বসেছে।", rule: "Big Place" }, 
            { en: "He arrived at the station.", bn: "স্টেশন একটি নির্দিষ্ট ছোট স্থান বা পয়েন্ট, তাই Arrive-এর পর 'at' বসেছে।", rule: "Specific Place" }, 
            { en: "This is different from that.", bn: "Different-এর পর 'from' বসানোই সঠিক ইংরেজি নিয়ম (Different than নয়)।", rule: "Fixed Prep" }
        ] 
    },
    { 
        id: 23, 
        title: "Very / Too / Enough", 
        subtitle: "Degree & Meaning", 
        icon: "fa-temperature-half", 
        concept: "'Very' গুণ বাড়ায়। 'Too' নেতিবাচক অর্থ দেয় (এতটাই যে সহ্য করা যায় না)। 'Enough' মানে যথেষ্ট, এটি সর্বদা Adjective-এর পরে বসে (Tall enough)।", 
        examples: [
            { en: "She is very clever.", bn: "'Very' এখানে Clever-এর মাত্রা বুঝিয়েছে, কিন্তু অর্থ ইতিবাচক রেখেছে।", rule: "Emphasis" }, 
            { en: "The soup is too hot to eat.", bn: "স্যুপটি 'এতটাই গরম যে খাওয়া যাচ্ছে না'—এই নেতিবাচক অর্থে 'Too' বসেছে।", rule: "Excessive" }, 
            { en: "He is tall enough.", bn: "'Enough' সর্বদা Adjective-এর পরে বসে (Tall enough), আগে নয় (Enough tall ভুল)।", rule: "Sufficient" }
        ] 
    },
    { 
        id: 24, 
        title: "Who / Whom / Whose", 
        subtitle: "Subject vs Object vs Possession", 
        icon: "fa-circle-question", 
        concept: "কে কাজ করছে? → 'Who' (Subject)। কার ওপর কাজ হচ্ছে? → 'Whom' (Object)। কার মালিকানায়? → 'Whose' (Possession)।", 
        examples: [
            { en: "Who broke the vase?", bn: "কে ভেঙেছে? এখানে Subject জানতে চাওয়া হচ্ছে, তাই 'Who' বসেছে।", rule: "Subject Case" }, 
            { en: "Whom did you call?", bn: "তুমি কাকে কল করেছ? এখানে Object (যাকে কল করা হয়েছে) জানতে চাওয়া হচ্ছে, তাই 'Whom' বসেছে।", rule: "Object Case" }, 
            { en: "Whose bag was stolen?", bn: "ব্যাগটি কার? মালিকানা জানতে চাওয়া হচ্ছে, তাই 'Whose' ব্যবহৃত হয়েছে।", rule: "Possessive Case" }
        ] 
    },
    { 
        id: 25, 
        title: "Preposition + Whom", 
        subtitle: "Formal Structure", 
        icon: "fa-user-tie", 
        concept: "ফরমাল ইংরেজিতে Preposition সাধারণত Whom-এর ঠিক আগে বসে। যেমন: To whom (কাকে), With whom (কার সাথে), For whom (কার জন্য)।", 
        examples: [
            { en: "To whom did you give it?", bn: "তুমি এটি কাকে দিয়েছ? ফরমাল ইংলিশে Preposition 'To' টি Whom-এর আগে বসেছে।", rule: "Prep + Whom" }, 
            { en: "With whom are you going?", bn: "কার সাথে? 'With' টি বাক্যের শেষে না বসিয়ে Whom-এর আগে বসানো ফরমাল স্টাইল।", rule: "Prep + Whom" }, 
            { en: "For whom is this gift?", bn: "কার জন্য? 'For' Preposition টি Whom-এর আগে বসেছে।", rule: "Prep + Whom" }
        ] 
    },
    { 
        id: 26, 
        title: "Whose vs Of Which", 
        subtitle: "Possession (Person vs Thing)", 
        icon: "fa-house-chimney", 
        concept: "মানুষের মালিকানা বোঝাতে 'Whose' বসে। বস্তুর ক্ষেত্রে ফরমাল ইংরেজিতে 'Of which' ব্যবহার হয়, তবে বর্তমানে বস্তুর ক্ষেত্রেও 'Whose' গ্রহণযোগ্য।", 
        examples: [
            { en: "The student whose bag...", bn: "ছাত্রটি একজন ব্যক্তি, তাই তার মালিকানা বোঝাতে 'Whose' বসেছে।", rule: "Person Poss." }, 
            { en: "The house, the roof of which...", bn: "বাড়িটি বস্তু (Thing), তাই ফরমাল ইংলিশে 'of which' ব্যবহার করা হয়েছে।", rule: "Thing Poss." }, 
            { en: "Company whose employees...", bn: "Company একটি প্রতিষ্ঠান হলেও আধুনিক ইংরেজিতে সহজভাবে 'Whose' গ্রহণ করা হয়।", rule: "Org Poss." }
        ] 
    },
    { 
        id: 27, 
        title: "Adjective vs Adverb", 
        subtitle: "Good/Well, Hard/Hardly", 
        icon: "fa-shapes", 
        concept: "Adjective নাউনকে মডিফাই করে। Adverb ভার্বকে মডিফাই করে। মনে রাখবেন: Hard = কঠোর পরিশ্রম, Hardly = কদাচিৎ/প্রায় না। Good = Adjective, Well = Adverb।", 
        examples: [
            { en: "He is a good teacher.", bn: "'Good' এখানে Teacher (Noun)-এর গুণ বোঝাচ্ছে, তাই এটি Adjective।", rule: "Adj -> Noun" }, 
            { en: "He teaches well.", bn: "'Well' এখানে Teaches (Verb)-কে মডিফাই করছে (কেমন পড়ান?), তাই এটি Adverb।", rule: "Adv -> Verb" }, 
            { en: "She hardly sleeps.", bn: "'Hardly' মানে সে 'প্রায় ঘুমায় না বললেই চলে'। এটি একটি নেতিবাচক শব্দ।", rule: "Negative Adv" }
        ] 
    },
    { 
        id: 28, 
        title: "Countable vs Uncountable", 
        subtitle: "Quantity Words", 
        icon: "fa-cubes-stacked", 
        concept: "গণনাযোগ্য (Countable - যেমন বই) হলে many/few বসে। অগণনযোগ্য (Uncountable - যেমন জল, টাকা) হলে much/little বসে।", 
        examples: [
            { en: "She has many books.", bn: "বই গোনা যায়, তাই 'Many' বসেছে।", rule: "Countable" }, 
            { en: "Much water in the tank.", bn: "জল গোনা যায় না (Uncountable), তাই 'Much' বসেছে।", rule: "Uncountable" }, 
            { en: "I have few coins left.", bn: "কয়েন গোনা যায়, তাই 'Few' ব্যবহৃত হয়েছে।", rule: "Countable" }
        ] 
    },
    { 
        id: 29, 
        title: "No Double Negative", 
        subtitle: "Avoid Redundancy", 
        icon: "fa-xmark", 
        concept: "একটি বাক্যে দুটি নেগেটিভ শব্দ (যেমন: not + no/nothing) একসঙ্গে ব্যবহার করা ভুল। একে Double Negative বলে, যা অর্থের বিভ্রান্তি ঘটায়। একটি নেগেটিভই যথেষ্ট।", 
        examples: [
            { en: "I don’t want any help.", bn: "'Don't' (not) আছে, তাই পরে 'no help' না বলে 'any help' বলা হয়েছে।", rule: "Single Negative" }, 
            { en: "She didn’t say anything.", bn: "'Didn't' (Negative) থাকায় পরে 'nothing' না বলে 'anything' বলা হয়েছে।", rule: "Single Negative" }, 
            { en: "Nobody came.", bn: "'Nobody' নিজেই নেতিবাচক, তাই 'Nobody didn't come' বলা ভুল।", rule: "Single Negative" }
        ] 
    },
    { 
        id: 30, 
        title: "Question Tags", 
        subtitle: "Positive ↔ Negative", 
        icon: "fa-circle-notch", 
        concept: "মূল বাক্য Positive হলে Question Tag হবে Negative। আর মূল বাক্য Negative হলে Tag হবে Positive। ব্যতিক্রম: 'Let's' থাকলে সর্বদা 'shall we?' হয়।", 
        examples: [
            { en: "You are coming, aren’t you?", bn: "মূল বাক্যটি হ্যা-বোধক (Positive), তাই ট্যাগটি না-বোধক (aren't you) হয়েছে।", rule: "+ve → -ve" }, 
            { en: "She doesn’t like tea, does she?", bn: "মূল বাক্যটি না-বোধক (Negative), তাই ট্যাগটি হ্যা-বোধক (does she) হয়েছে।", rule: "-ve → +ve" }, 
            { en: "Let’s go, shall we?", bn: "'Let's' দিয়ে বাক্য শুরু হলে সর্বদা 'shall we?' ট্যাগ হিসেবে বসে।", rule: "Exception" }
        ] 
    },
    { 
        id: 31, 
        title: "Inversion: Hardly/Scarcely", 
        subtitle: "Auxiliary Verb Before Subject", 
        icon: "fa-arrow-right-arrow-left", 
        concept: "Hardly, Scarcely বা No sooner বাক্যের শুরুতে থাকলে Subject-এর আগে Auxiliary verb (had/did) চলে আসে। একেই Inversion বলে।", 
        examples: [
            { en: "Hardly had he reached home...", bn: "Hardly শুরুতে থাকায় 'he had' উল্টে গিয়ে 'had he' (Inversion) হয়েছে।", rule: "Inversion" }, 
            { en: "Scarcely had I sat down...", bn: "Scarcely শুরুতে থাকায় 'I had' না হয়ে 'had I' বসেছে।", rule: "Inversion" }, 
            { en: "No sooner had they arrived...", bn: "No sooner শুরুতে থাকলে নিয়ম অনুযায়ী Inversion (had they) হয়।", rule: "Mandatory Inversion" }
        ] 
    },
    { 
        id: 32, 
        title: "Not only... but also", 
        subtitle: "Beginning of Sentence → Inversion", 
        icon: "fa-bolt", 
        concept: "যদি 'Not only' বাক্যের একদম শুরুতে থাকে, তবে Subject এবং Verb-এর ক্রম উল্টে যায় (Inversion হয়)। অর্থাৎ Verb সাবজেক্টের আগে চলে আসে।", 
        examples: [
            { en: "Not only did he win, but also...", bn: "Not only শুরুতে থাকায় 'did' (Auxiliary) সাবজেক্ট 'he'-এর আগে চলে এসেছে।", rule: "Initial Position" }, 
            { en: "Not only was she intelligent...", bn: "এখানেও Not only শুরুতে থাকায় 'was she' (Verb-Subject) গঠন হয়েছে।", rule: "Inversion" }, 
            { en: "Not only do they study...", bn: "Not only শুরুতে থাকায় 'do they' বসেছে।", rule: "Inversion" }
        ] 
    },
    { 
        id: 33, 
        title: "Parallelism", 
        subtitle: "Consistent Structure", 
        icon: "fa-lines-leaning", 
        concept: "একই বাক্যে তালিকাভুক্ত শব্দ বা বাক্যাংশগুলোর Grammatical form একই হতে হবে (সবগুলো noun, বা সব adjective, বা সব gerund)। একে Parallelism বলে।", 
        examples: [
            { en: "He likes reading, writing, and swimming.", bn: "এখানে তিনটি কাজই Gerund (ing) ফর্মে আছে, তাই এটি Parallel।", rule: "Gerunds" }, 
            { en: "To sing, to dance, and to act.", bn: "এখানে তিনটি কাজই Infinitive (to+verb) ফর্মে আছে, তাই গঠনটি ঠিক আছে।", rule: "Infinitives" }, 
            { en: "Honest, hardworking, and polite.", bn: "এখানে তিনটি গুণই Adjective, তাই বাক্যটি ভারসাম্যপূর্ণ (Parallel)।", rule: "Adjectives" }
        ] 
    },
    { 
        id: 34, 
        title: "Misplaced Modifier", 
        subtitle: "Place Modifier Next to Subject", 
        icon: "fa-shuffle", 
        concept: "Modifier যাকে বর্ণনা করছে, তার ঠিক পাশেই তাকে বসাতে হবে। অন্যথায় বাক্যের অর্থ হাস্যকর বা ভুল হতে পারে।", 
        examples: [
            { en: "Walking down the street, I saw...", bn: "কে হাঁটছিল? 'I' (আমি)। তাই Modifier-এর ঠিক পরেই 'I' বসেছে।", rule: "Correct Placement" }, 
            { en: "Served soup in paper cups to guests.", bn: "'In paper cups' কথাটি soup-কে বর্ণনা করছে, তাই এটি soup-এর পাশেই বসবে।", rule: "Noun Modifier" }, 
            { en: "She drove for nearly ten hours.", bn: "সময় বোঝাতে 'nearly' শব্দটি 'ten hours'-এর ঠিক আগে বসেছে।", rule: "Adverbial Modifier" }
        ] 
    },
    { 
        id: 35, 
        title: "Dangling Modifier", 
        subtitle: "Subject Must Be Present", 
        icon: "fa-anchor-circle-xmark", 
        concept: "Modifier-এর কাজটি যে Subject করছে, সেই Subject-কে বাক্যে অবশ্যই উপস্থিত থাকতে হবে। না থাকলে Modifier 'ঝুলে' (dangling) থাকে।", 
        examples: [
            { en: "Having finished dinner, I turned on TV.", bn: "কে ডিনার শেষ করল? 'I'। Subject 'I' বাক্যে উপস্থিত আছে, তাই এটি সঠিক।", rule: "Subject Present" }, 
            { en: "To improve health, he must exercise.", bn: "স্বাস্থ্য ভালো করার কাজটি 'he' করবে, তাই Subject 'he' উল্লেখ আছে।", rule: "Purpose Clause" }, 
            { en: "While reading, I noticed...", bn: "পড়ার সময় 'আমি' খেয়াল করলাম—Subject 'I' স্পষ্টভাবে উল্লেখ আছে।", rule: "Active Subject" }
        ] 
    },
    { 
        id: 36, 
        title: "Too... to Structure", 
        subtitle: "Negative Meaning (Inability)", 
        icon: "fa-ban", 
        concept: "Too + adjective + to + verb গঠনটি নেতিবাচক অর্থ প্রকাশ করে। এর মানে হলো 'এতটাই... যে কাজটি করা সম্ভব নয়'।", 
        examples: [
            { en: "He is too weak to walk.", bn: "এর অর্থ: সে এতটাই দুর্বল যে সে হাঁটতে পারছে না। (Negative)", rule: "Inability" }, 
            { en: "The box is too heavy to lift.", bn: "বাক্সটি এত ভারী যে এটি তোলা সম্ভব নয়।", rule: "Inability" }, 
            { en: "She was too tired to continue.", bn: "সে এতটাই ক্লান্ত ছিল যে কাজ চালিয়ে যাওয়া তার পক্ষে সম্ভব ছিল না।", rule: "Inability" }
        ] 
    },
    { 
        id: 37, 
        title: "So... as Structure", 
        subtitle: "Negative Comparison", 
        icon: "fa-scale-unbalanced", 
        concept: "নেতিবাচক বাক্যে (Negative sentence) তুলনার জন্য 'as...as' এর বদলে 'so...as' ব্যবহার করা ব্যাকরণগতভাবে বেশি শুদ্ধ।", 
        examples: [
            { en: "He is not so tall as his brother.", bn: "বাক্যটি নেতিবাচক (not), তাই তুলনার জন্য 'so...as' ব্যবহার করা হয়েছে।", rule: "Negative Comp" }, 
            { en: "This is not so interesting as that.", bn: "নেতিবাচক বাক্য হওয়ায় 'as...as' এর পরিবর্তে 'so...as' বসেছে।", rule: "Structure" }, 
            { en: "She is not so fast as her sister.", bn: "নেতিবাচক তুলনা, তাই 'so...as' ব্যবহার হয়েছে।", rule: "Negative Comp" }
        ] 
    },
    { 
        id: 38, 
        title: "Question Tags (Basics)", 
        subtitle: "Opposite Polarity", 
        icon: "fa-circle-question", 
        concept: "Statement Positive হলে Tag Negative হবে। Statement Negative হলে Tag Positive হবে। Auxiliary verb এবং Subject pronoun মিল রাখতে হবে।", 
        examples: [
            { en: "She is a doctor, isn't she?", bn: "Statement-এ 'is' আছে এবং এটি Positive, তাই Tag হয়েছে 'isn't she?'", rule: "+ve → -ve" }, 
            { en: "They aren't ready, are they?", bn: "Statement-এ 'aren't' (Negative) আছে, তাই Tag হয়েছে 'are they?'", rule: "-ve → +ve" }, 
            { en: "You can swim, can't you?", bn: "Modal 'can' থাকায় Tag-এ 'can't' বসেছে।", rule: "Modal Tag" }
        ] 
    },
    { 
        id: 39, 
        title: "One vs Ones", 
        subtitle: "Singular vs Plural Replacement", 
        icon: "fa-1", 
        concept: "একই Noun বারবার না লিখে একবচনে 'one' এবং বহুবচনে 'ones' ব্যবহার করা হয়।", 
        examples: [
            { en: "I lost my pen. Give me one.", bn: "Pen (Singular) দ্বিতীয়বার না লিখে তার পরিবর্তে 'one' লেখা হয়েছে।", rule: "Singular Replacement" }, 
            { en: "These apples are bad; take fresh ones.", bn: "Apples (Plural) শব্দটির পুনরাবৃত্তি এড়াতে 'ones' ব্যবহার করা হয়েছে।", rule: "Plural Replacement" }, 
            { en: "Take the big one.", bn: "নির্দিষ্ট একটি জিনিস (Singular) বোঝাতে 'one' ব্যবহার করা হয়েছে।", rule: "Pronoun Usage" }
        ] 
    },
    { 
        id: 40, 
        title: "So do I / Neither do I", 
        subtitle: "Agreement", 
        icon: "fa-handshake", 
        concept: "কারও সাথে একমত হতে: Positive বাক্যে 'So do I' এবং Negative বাক্যে 'Neither do I' ব্যবহৃত হয়।", 
        examples: [
            { en: "I like coffee. — So do I.", bn: "প্রথম বাক্য Positive, তাই একমত হতে 'So do I' (আমিও পছন্দ করি) বসেছে।", rule: "So + Aux + Subj" }, 
            { en: "I don't smoke. — Neither do I.", bn: "প্রথম বাক্য Negative, তাই একমত হতে 'Neither do I' (আমিও করি না) বসেছে।", rule: "Neither + Aux + Subj" }, 
            { en: "She can swim. — So can I.", bn: "প্রথম বাক্যে Modal 'can' আছে, তাই উত্তরেও 'can' ব্যবহৃত হয়েছে।", rule: "So + Modal + Subj" }
        ] 
    },
    { 
        id: 41, 
        title: "Each other vs One another", 
        subtitle: "Two vs More than Two", 
        icon: "fa-user-group", 
        concept: "দুইজনের মধ্যে পারস্পরিক কাজ হলে 'each other' এবং দুইয়ের অধিক হলে 'one another' বসে।", 
        examples: [
            { en: "The two friends hugged each other.", bn: "বন্ধু মাত্র দুইজন, তাই 'each other' বসেছে।", rule: "Two People" }, 
            { en: "The players congratulated one another.", bn: "খেলোয়াড় অনেকে (দুইয়ের বেশি), তাই 'one another' বসেছে।", rule: "More than Two" }, 
            { en: "The couple trust each other.", bn: "দম্পতি মানে দুইজন, তাই 'each other' ব্যবহার হয়েছে।", rule: "Two People" }
        ] 
    },
    { 
        id: 42, 
        title: "Collective Noun", 
        subtitle: "Singular Verb as a Unit", 
        icon: "fa-users-rectangle", 
        concept: "Team, Family, Committee যখন একক ইউনিট হিসেবে কাজ করে, তখন তাদের পরে Singular Verb বসে। কিন্তু তারা বিভক্ত হলে (Divided) Plural Verb বসে।", 
        examples: [
            { en: "The team is winning.", bn: "পুরো টিম মিলে একটি দল (Unit), তাই Verb Singular (is) হয়েছে।", rule: "Unit Concept" }, 
            { en: "The committee decides the budget.", bn: "কমিটি একমত হয়ে সিদ্ধান্ত নিচ্ছে, তাই Verb Singular (decides) হয়েছে।", rule: "Singular Action" }, 
            { en: "The family has arrived.", bn: "পুরো পরিবার একসাথে এসেছে, তাই Singular Verb (has) বসেছে।", rule: "Singular Verb" }
        ] 
    },
    { 
        id: 43, 
        title: "All / Every / Both", 
        subtitle: "Singular vs Plural Usage", 
        icon: "fa-layer-group", 
        concept: "Every/Each-এর পর Singular Noun বসে। Both-এর পর Plural Noun এবং Plural Verb বসে।", 
        examples: [
            { en: "Every student is present.", bn: "'Every' থাকার কারণে 'student' (Singular) এবং 'is' (Singular) বসেছে।", rule: "Singular Rule" }, 
            { en: "Each boy has a notebook.", bn: "'Each' থাকায় Noun (boy) এবং Verb (has) উভয়ই Singular।", rule: "Singular Rule" }, 
            { en: "Both boys are playing.", bn: "'Both' মানে দুইজন (Plural), তাই Noun (boys) এবং Verb (are) Plural হয়েছে।", rule: "Plural Rule" }
        ] 
    },
    { 
        id: 44, 
        title: "Apostrophe Rules", 
        subtitle: "'s vs s'", 
        icon: "fa-quote-right", 
        concept: "Singular noun-এর মালিকানা বোঝাতে 's বসে। কিন্তু Plural noun যদি s দিয়ে শেষ হয়, তবে শুধু অ্যাপস্ট্রফি (') বসে।", 
        examples: [
            { en: "The boy's book.", bn: "Boy শব্দটি Singular, তাই মালিকানা বোঝাতে 's যুক্ত হয়েছে।", rule: "Singular Poss." }, 
            { en: "The girls' room.", bn: "Girls শব্দটি Plural এবং s দিয়ে শেষ, তাই শেষে শুধু অ্যাপস্ট্রফি (') বসেছে।", rule: "Plural Poss." }, 
            { en: "Children's toys.", bn: "Children শব্দটি Plural কিন্তু s দিয়ে শেষ হয়নি, তাই 's বসেছে।", rule: "Irregular Plural" }
        ] 
    },
    { 
        id: 45, 
        title: "Lest... Should", 
        subtitle: "Negative Purpose", 
        icon: "fa-triangle-exclamation", 
        concept: "'Lest' মানে 'নাহলে' বা 'পাছে ভয় হয়'। এর পরে সর্বদা 'should' বসে। এখানে 'not' বসানো যাবে না কারণ Lest নিজেই নেতিবাচক।", 
        examples: [
            { en: "Walk carefully lest you should fall.", bn: "সাবধানে হাঁটো, 'পাছে' তুমি পড়ে যাও। Lest-এর সাথে should বসেছে।", rule: "Mandatory Pair" }, 
            { en: "Study hard lest you should fail.", bn: "ভালো করে পড়ো, 'নাহলে' ফেল করবে। Lest-এর পরে should বাধ্যতামূলক।", rule: "Warning" }, 
            { en: "Hurry lest we should miss the train.", bn: "তাড়াতাড়ি করো, পাছে আমরা ট্রেন মিস করি। এখানে Lest নেতিবাচক অর্থ দিচ্ছে।", rule: "Negative Purpose" }
        ] 
    },
    { 
        id: 46, 
        title: "As if / As though", 
        subtitle: "Unreal Past", 
        icon: "fa-mask", 
        concept: "As if / As though দিয়ে অবাস্তব বা কাল্পনিক কিছু বোঝালে এরপর Past Indefinite (were) বা Past Perfect Tense বসে।", 
        examples: [
            { en: "He talks as if he knew everything.", bn: "সে এমনভাবে কথা বলে 'যেন' সে সব জানে (আসলে জানে না)। অবাস্তব তাই Past Tense (knew)।", rule: "Unreal Present" }, 
            { en: "She behaves as though she were a queen.", bn: "সে রানীর মতো আচরণ করে (কিন্তু সে রানী নয়), তাই 'was' না হয়ে 'were' বসেছে।", rule: "Subjunctive" }, 
            { en: "He looks as if he had seen a ghost.", bn: "তাকে দেখে মনে হচ্ছে যেন সে ভূত দেখেছে (অতীতের ঘটনা), তাই Past Perfect (had seen)।", rule: "Unreal Past" }
        ] 
    },
    { 
        id: 47, 
        title: "Although / Though", 
        subtitle: "Contrast (Yet / Comma)", 
        icon: "fa-code-compare", 
        concept: "Although বা Though দুটি বিপরীতধর্মী বাক্যকে যুক্ত করে। এদের সাথে 'but' বসে না, তবে 'yet' বা 'comma' বসানো যায়।", 
        examples: [
            { en: "Although it was raining, we went out.", bn: "বৃষ্টি হওয়া সত্ত্বেও আমরা বাইরে গিয়েছিলাম। Although ব্যবহারের ফলে 'but' লাগেনি।", rule: "Contrast" }, 
            { en: "Though he is poor, he is honest.", bn: "যদিও সে গরিব, (তবুও) সে সৎ। এখানে কমা (,) ব্যবহার করা হয়েছে।", rule: "Comma usage" }, 
            { en: "Though she tried, yet she failed.", bn: "যদিও সে চেষ্টা করেছিল, তবুও ব্যর্থ হলো। Though-এর সাথে Yet ব্যবহার করা যায়।", rule: "Pair usage" }
        ] 
    },
    { 
        id: 48, 
        title: "Used to vs Be Used to", 
        subtitle: "Past Habit vs Accustomed", 
        icon: "fa-clock-rotate-left", 
        concept: "'Used to' + V1 = অতীতের অভ্যাস। 'Be used to' + V+ing = কোনো কিছুতে অভ্যস্ত হওয়া (Present Habit/State)।", 
        examples: [
            { en: "I used to play cricket.", bn: "আমি অতীতে ক্রিকেট খেলতাম (এখন আর খেলি না), তাই 'used to play' (V1)।", rule: "Past Habit" }, 
            { en: "I am used to waking up early.", bn: "আমি সকালে ওঠায় 'অভ্যস্ত' (Present Habit), তাই 'used to' এর পর 'waking' (ing) বসেছে।", rule: "Habitual" }, 
            { en: "He is getting used to the noise.", bn: "সে ধীরে ধীরে শব্দে অভ্যস্ত হচ্ছে (প্রক্রিয়া চলছে), তাই 'getting used to' ব্যবহৃত হয়েছে।", rule: "Process" }
        ] 
    },
    { 
        id: 49, 
        title: "Ellipsis Rule", 
        subtitle: "Omitting Repeated Words", 
        icon: "fa-scissors", 
        concept: "তুলনামূলক বাক্যে দ্বিতীয়বার একই Verb ব্যবহার না করে তা উহ্য (omitted) রাখা যায়। এতে বাক্য সুন্দর হয়।", 
        examples: [
            { en: "She reads more books than I (do).", bn: "এখানে 'than I read' না বলে Verb উহ্য রাখা হয়েছে, অথবা সংক্ষেপে 'do' ব্যবহার করা যায়।", rule: "Verb Omission" }, 
            { en: "He is taller than I (am).", bn: "তুলনা করার সময় শেষের 'am' উহ্য রাখা হয়। পূর্ণ রূপ: He is taller than I am.", rule: "Auxiliary Omission" }, 
            { en: "She likes tea more than coffee.", bn: "এখানে 'than she likes coffee' না বলে 'likes' উহ্য রাখা হয়েছে।", rule: "Verb Omission" }
        ] 
    },
    { 
        id: 50, 
        title: "Double Subject Error", 
        subtitle: "Avoid Redundant Pronouns", 
        icon: "fa-xmark", 
        concept: "একই বাক্যে Subject (Noun) বসানোর পর ঠিক পরেই আবার তার Pronoun বসানো ভুল। একে Double Subject Error বলে।", 
        examples: [
            { en: "My brother lives in Delhi.", bn: "'My brother he lives...' বলা ভুল, কারণ 'My brother' নিজেই Subject।", rule: "Single Subject" }, 
            { en: "The teacher gave homework.", bn: "'The teacher she gave...' ভুল, কারণ Noun থাকার পর আর Pronoun লাগে না।", rule: "No Redundancy" }, 
            { en: "These boys are naughty.", bn: "'These boys they are...' বলা ভুল। সরাসরি Verb বসাতে হবে।", rule: "Correct Syntax" }
        ] 
    },
    { 
        id: 51, 
        title: "Quantifiers", 
        subtitle: "Some vs Any vs None", 
        icon: "fa-basket-shopping", 
        concept: "Positive বাক্যে 'Some', Negative বাক্যে 'Any' এবং 'কেউ না/কিছু না' বোঝাতে 'None' বসে।", 
        examples: [
            { en: "I have some money.", bn: "বাক্যটি Positive, তাই 'Some' বসেছে।", rule: "Positive" }, 
            { en: "I don't have any idea.", bn: "বাক্যটি Negative (don't), তাই 'Any' বসেছে।", rule: "Negative" }, 
            { en: "None of them were present.", bn: "তাদের 'কেউই না' উপস্থিত ছিল, এই শূন্যতা বোঝাতে 'None' বসেছে।", rule: "Zero Quantity" }
        ] 
    },
    { 
        id: 52, 
        title: "Participle Clause", 
        subtitle: "Combining Sentences", 
        icon: "fa-link", 
        concept: "Present Participle (V+ing) বা Perfect Participle (Having+V3) ব্যবহার করে দুটি কাজকে একটি বাক্যে যুক্ত করা যায়।", 
        examples: [
            { en: "Having finished work, he went home.", bn: "কাজটি পুরোপুরি শেষ করার পর সে বাড়ি গেল। একটি কাজ শেষ হওয়ার পর আরেকটি, তাই Perfect Participle।", rule: "Sequence" }, 
            { en: "Being tired, she slept early.", bn: "ক্লান্ত হওয়ার কারণে সে ঘুমিয়ে পড়ল। কারণ বোঝাতে Participle ব্যবহৃত হয়েছে।", rule: "Reason-Result" }, 
            { en: "Walking down the road, I met him.", bn: "রাস্তা দিয়ে হাঁটার সময় (একই সাথে চলা কাজ) তার সাথে দেখা হলো।", rule: "Action" }
        ] 
    },
    { 
        id: 53, 
        title: "Adjective Order", 
        subtitle: "OSASCOMP Rule", 
        icon: "fa-arrow-down-1-9", 
        concept: "একাধিক Adjective বসলে ক্রম হবে: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose। (OSASCOMP)", 
        examples: [
            { en: "A beautiful small old red table.", bn: "ক্রম: Beautiful (Opinion) → small (Size) → old (Age) → red (Colour)।", rule: "OSASCOMP" }, 
            { en: "A nice big blue bag.", bn: "ক্রম: Nice (Opinion) → big (Size) → blue (Colour)।", rule: "Order" }, 
            { en: "A lovely young Indian girl.", bn: "ক্রম: Lovely (Opinion) → young (Age) → Indian (Origin)।", rule: "Order" }
        ] 
    },
    { 
        id: 54, 
        title: "Cleft Sentences", 
        subtitle: "Emphasis with 'It is'", 
        icon: "fa-highlighter", 
        concept: "বাক্যের কোনো নির্দিষ্ট অংশকে জোর দিতে 'It is... that...' বা 'It was... who...' গঠন ব্যবহার করা হয়।", 
        examples: [
            { en: "It was John who stole the money.", bn: "সাধারণ বাক্যের বদলে John-এর ওপর জোর দিতে 'It was John' ব্যবহার করা হয়েছে।", rule: "Person Emphasis" }, 
            { en: "It is English that he loves.", bn: "অন্য কোনো বিষয় নয়, 'English'-কেই সে ভালোবাসে—জোর দিতে এই গঠন।", rule: "Object Emphasis" }, 
            { en: "It was yesterday when I met her.", bn: "সময়ের (Yesterday) ওপর গুরুত্ব দিতে 'It was yesterday' বলা হয়েছে।", rule: "Time Emphasis" }
        ] 
    },
    { 
        id: 55, 
        title: "Subjunctive Mood", 
        subtitle: "Base Form after Suggest/Demand", 
        icon: "fa-gavel", 
        concept: "Suggest, Recommend, Demand, Insist ইত্যাদি Verb-এর পর that clause-এ সর্বদা Verb-এর Base form (যেমন: be, go, pay) বসে। এস/ইএস হয় না।", 
        examples: [
            { en: "I suggest that he be present.", bn: "Suggest-এর পর 'is' না বসে Base form 'be' বসেছে।", rule: "Mandatory Base" }, 
            { en: "It is important that she be careful.", bn: "Important that... এরপর 'is' এর বদলে 'be' বসেছে (Subjunctive Mood)।", rule: "Adjective Subj." }, 
            { en: "I demand that he pay the bill.", bn: "Demand-এর পর he থাকা সত্ত্বেও 'pays' হয়নি, Base form 'pay' হয়েছে।", rule: "Verb Subj." }
        ] 
    },
    { 
        id: 56, 
        title: "Would rather / Had better", 
        subtitle: "Preference & Advice", 
        icon: "fa-thumbs-up", 
        concept: "'Would rather' পছন্দ বা অগ্রাধিকার বোঝাতে এবং 'Had better' জোরালো পরামর্শ দিতে ব্যবহৃত হয়। উভয়ের পরেই V1 বসে।", 
        examples: [
            { en: "I would rather stay home.", bn: "আমি বরং বাড়িতেই থাকব (পছন্দ)। Would rather-এর পর 'stay' (V1) বসেছে।", rule: "Preference" }, 
            { en: "You had better finish your work.", bn: "তোমার বরং কাজটি শেষ করা উচিত (পরামর্শ)। Had better-এর পর V1 বসেছে।", rule: "Strong Advice" }, 
            { en: "I'd rather not go.", bn: "আমি বরং যাব না (Negative Preference)। Not-এর পরে V1 বসেছে।", rule: "Negative" }
        ] 
    },
    { 
        id: 57, 
        title: "Let / Make / Help", 
        subtitle: "Causative Verbs", 
        icon: "fa-hand-holding-hand", 
        concept: "Let (অনুমতি), Make (বাধ্য করা) এবং Help (সাহায্য করা)-এর পর Object এবং তারপর to ছাড়া Verb (Bare Infinitive/V1) বসে।", 
        examples: [
            { en: "They let me go.", bn: "'Let' থাকার কারণে 'to go' না হয়ে শুধু 'go' বসেছে।", rule: "Permission" }, 
            { en: "She made him cry.", bn: "'Make' (made) থাকার কারণে 'to cry' না হয়ে শুধু 'cry' বসেছে।", rule: "Force" }, 
            { en: "He helped me finish the work.", bn: "'Help' থাকার পর 'to' উহ্য রাখা যায়, তাই শুধু 'finish' বসেছে।", rule: "Assistance" }
        ] 
    },
    { 
        id: 58, 
        title: "Except / Despite", 
        subtitle: "Exclusion & Contrast", 
        icon: "fa-circle-minus", 
        concept: "Except মানে 'ব্যতীত' বা 'ছাড়া'। Despite বা In spite of মানে 'সত্ত্বেও' (বিপরীত পরিস্থিতি)। Despite-এর সাথে of বসে না।", 
        examples: [
            { en: "Everyone came except him.", bn: "সে ছাড়া সবাই এসেছিল। এখানে 'except' মানে তাকে বাদ দিয়ে।", rule: "Exclusion" }, 
            { en: "Despite the rain, we played.", bn: "বৃষ্টি হওয়া সত্ত্বেও আমরা খেলেছিলাম। Despite-এর সাথে 'of' বসে না।", rule: "Preposition" }, 
            { en: "In spite of effort, he failed.", bn: "চেষ্টা করা সত্ত্বেও সে ব্যর্থ হলো। In spite-এর সাথে সর্বদা 'of' বসে।", rule: "Contrast" }
        ] 
    },
    { 
        id: 59, 
        title: "Which vs That", 
        subtitle: "Clause Types", 
        icon: "fa-paperclip", 
        concept: "অপরিহার্য তথ্য দিতে 'That' (Restrictive) বসে। অতিরিক্ত তথ্য দিতে 'Which' (Non-restrictive) বসে এবং কমা (,) ব্যবহার করতে হয়।", 
        examples: [
            { en: "The book that you gave is good.", bn: "কোন বইটি? যেটি তুমি দিয়েছ। এটি নির্দিষ্ট বা অপরিহার্য তথ্য, তাই 'That' বসেছে।", rule: "Essential Info" }, 
            { en: "The book, which you gave, is good.", bn: "এখানে বইটির পরিচয় আগে থেকেই জানা, 'which' দিয়ে বাড়তি কথা বলা হয়েছে, তাই কমা আছে।", rule: "Extra Info" }, 
            { en: "The man that I saw was tall.", bn: "কোন লোকটি? যাকে আমি দেখেছিলাম। নির্দিষ্ট করতে 'That' বসেছে।", rule: "Defining" }
        ] 
    },
    { 
        id: 60, 
        title: "Whether vs If", 
        subtitle: "Choice vs Condition", 
        icon: "fa-question", 
        concept: "দুটি বিকল্প বা অনিশ্চয়তা (Choice/Doubt) থাকলে 'Whether' বসে। আর শর্ত (Condition) বোঝালে 'If' বসে।", 
        examples: [
            { en: "I don't know whether he will come.", bn: "সে আসবে কি আসবে না (অনিশ্চয়তা), তাই 'Whether' ব্যবহার হয়েছে।", rule: "Uncertainty" }, 
            { en: "Tell me whether this is correct.", bn: "এটি সঠিক নাকি ভুল (বিকল্প), তাই 'Whether' বসেছে।", rule: "Choice" }, 
            { en: "If it rains, we will stay home.", bn: "এখানে একটি শর্ত দেওয়া হয়েছে (যদি বৃষ্টি হয়), তাই 'If' বসেছে।", rule: "Condition" }
        ] 
    },
    { 
        id: 61, 
        title: "Phrasal Verbs", 
        subtitle: "Separable vs Inseparable", 
        icon: "fa-puzzle-piece", 
        concept: "Separable phrasal verb-এ object মাঝে বা শেষে বসতে পারে। কিন্তু Inseparable-এ object সবসময় শেষে বসে এবং particle আলাদা করা যায় না।", 
        examples: [
            { en: "He looked up the word. / looked the word up.", bn: "Look up হলো Separable, তাই Object (word) মাঝে বা শেষে বসানো যায়।", rule: "Separable" }, 
            { en: "He ran into an old friend.", bn: "Run into (হঠাৎ দেখা হওয়া) Inseparable, তাই Object সর্বদা শেষে বসে।", rule: "Inseparable" }, 
            { en: "She called the meeting off.", bn: "Call off হলো Separable, তাই Object মাঝে বসানো হয়েছে।", rule: "Separable" }
        ] 
    },
    { 
        id: 62, 
        title: "Verb Patterns", 
        subtitle: "Gerund vs Infinitive", 
        icon: "fa-shapes", 
        concept: "কিছু Verb-এর পর Gerund (-ing) বসে (যেমন: enjoy, mind), আর কিছুর পর Infinitive (to+V1) বসে (যেমন: decide, plan)।", 
        examples: [
            { en: "I enjoy reading books.", bn: "Enjoy-এর পর সর্বদা Verb+ing (reading) বসে।", rule: "Verb + Gerund" }, 
            { en: "He decided to go home.", bn: "Decide-এর পর সর্বদা Infinitive (to go) বসে।", rule: "Verb + Inf" }, 
            { en: "Remember meeting vs Remember to meet", bn: "Remember meeting = অতীতের দেখা করার স্মৃতি। Remember to meet = ভবিষ্যতে দেখা করার দায়িত্ব।", rule: "Meaning Change" }
        ] 
    },
    { 
        id: 63, 
        title: "Adjective vs Adverb", 
        subtitle: "Confusion Words", 
        icon: "fa-circle-exclamation", 
        concept: "Adjective Noun-কে মডিফাই করে। Adverb Verb-কে মডিফাই করে। Hard (কঠোর) এবং Hardly (কদাচিৎ) এর মধ্যে পার্থক্য মনে রাখা জরুরি।", 
        examples: [
            { en: "He works hard.", bn: "সে কঠোর পরিশ্রম করে। এখানে Hard হলো Adverb যা works-কে মডিফাই করছে।", rule: "Effort" }, 
            { en: "He hardly works.", bn: "সে কাজ করে না বললেই চলে। Hardly একটি নেতিবাচক শব্দ।", rule: "Frequency" }, 
            { en: "Good singer vs Sings well.", bn: "Good হলো Adjective (Singer-এর জন্য), আর Well হলো Adverb (Sings-এর জন্য)।", rule: "Adj vs Adv" }
        ] 
    },
    { 
        id: 64, 
        title: "Reported Questions", 
        subtitle: "Indirect Speech Rules", 
        icon: "fa-comments", 
        concept: "Indirect speech-এ প্রশ্নবোধক চিহ্ন থাকে না, Inversion (Subject-এর আগে Verb) হয় না এবং Tense অতীতে পরিবর্তিত হয়।", 
        examples: [
            { en: "He asked where I was going.", bn: "প্রশ্নবোধক বাক্যকে Indirect করার সময় Subject আগে ও Verb পরে বসে (I was)।", rule: "Statement Order" }, 
            { en: "She asked what he had said.", bn: "Direct-এ 'Did say' ছিল, Indirect-এ তা 'Had said' (Past Perfect) হয়েছে।", rule: "Tense Change" }, 
            { en: "He asked if I was happy.", bn: "Yes/No প্রশ্নের ক্ষেত্রে লিঙ্কার হিসেবে 'if' বা 'whether' বসে।", rule: "Yes/No Q" }
        ] 
    },
    { 
        id: 65, 
        title: "Irregular Tag Questions", 
        subtitle: "Exceptions to Rules", 
        icon: "fa-tag", 
        concept: "কিছু Tag Question নিয়মের ব্যতিক্রম। যেমন: Let's থাকলে 'shall we?', I am থাকলে 'aren't I?', এবং Nobody থাকলে 'they' বসে।", 
        examples: [
            { en: "Let's go, shall we?", bn: "Let's (Let us) থাকলে নিয়ম অনুযায়ী সর্বদা Tag হিসেবে 'shall we?' বসে।", rule: "Exception" }, 
            { en: "I am right, aren't I?", bn: "'I am'-এর Negative Tag 'amn't I' হয় না, 'aren't I' হয়।", rule: "Exception" }, 
            { en: "Nobody came, did they?", bn: "Nobody শব্দটি Singular হলেও Tag-এ Pronoun হিসেবে 'they' বসে।", rule: "Pronoun Change" }
        ] 
    },
    { 
        id: 66, 
        title: "Mixed Conditionals", 
        subtitle: "Past Cause, Present Result", 
        icon: "fa-shuffle", 
        concept: "অতীতের কোনো ঘটনার বর্তমান ফলাফল বোঝাতে Mixed Conditional ব্যবহৃত হয়। (If + Past Perfect → would + V1)।", 
        examples: [
            { en: "If he had studied, he would be successful now.", bn: "সে যদি অতীতে পড়ত (Past Cause), তবে এখন সফল হতো (Present Result)।", rule: "Mixed Time" }, 
            { en: "If I were rich, I would have helped.", bn: "আমি যদি ধনী হতাম (Present State), তবে অতীতে সাহায্য করতাম (Past Result)।", rule: "Mixed Time" }, 
            { en: "If you had come, we would be eating.", bn: "তুমি যদি আসতে (Past), তবে আমরা এখন খেতে থাকতাম (Present Continuous)।", rule: "Mixed Time" }
        ] 
    },
    { 
        id: 67, 
        title: "Conditional Inversion", 
        subtitle: "Had/Were/Should at Start", 
        icon: "fa-arrow-right-arrow-left", 
        concept: "Formal English-এ 'If' বাদ দিয়ে Had, Were বা Should বাক্যের শুরুতে বসিয়ে Inversion করা যায়। অর্থ একই থাকে।", 
        examples: [
            { en: "Had I known, I would have helped.", bn: "'Had I known' মানেই 'If I had known'। If বাদ দিয়ে Had সামনে আনা হয়েছে।", rule: "Inversion" }, 
            { en: "Were I you, I wouldn't do that.", bn: "'Were I you' মানে 'If I were you'। এটি বেশ ফরমাল স্টাইল।", rule: "Inversion" }, 
            { en: "Should you need help, call me.", bn: "'Should you need' মানে 'If you should need'। If উহ্য রাখা হয়েছে।", rule: "Inversion" }
        ] 
    },
    { 
        id: 68, 
        title: "Correlative Conjunctions", 
        subtitle: "Nearest Subject Rule", 
        icon: "fa-left-right", 
        concept: "Either...or, Neither...nor-এর ক্ষেত্রে Verb সবসময় তার কাছের Subject (Nearest Subject) অনুযায়ী বসে। Both...and-এ সর্বদা Plural হয়।", 
        examples: [
            { en: "Both John and Rahul are coming.", bn: "Both...and দিয়ে যুক্ত হলে Subject সর্বদা Plural হয়, তাই 'are' বসেছে।", rule: "Plural Rule" }, 
            { en: "Either he or his friends are guilty.", bn: "Verb-এর কাছের Subject 'friends' (Plural), তাই Verb 'are' হয়েছে।", rule: "Proximity" }, 
            { en: "Neither the students nor the teacher is present.", bn: "Verb-এর কাছের Subject 'teacher' (Singular), তাই Verb 'is' হয়েছে।", rule: "Proximity" }
        ] 
    },
    { 
        id: 69, 
        title: "Determiner Conflicts", 
        subtitle: "Order & Restrictions", 
        icon: "fa-ban", 
        concept: "দুটি Determiner (যেমন: a, the, my, this) সাধারণত পাশাপাশি বসে না। Singular/Plural-এর মিল রাখতে হয়।", 
        examples: [
            { en: "my book (Not 'the my book')", bn: "'The' এবং 'My' দুটিই Determiner, তাই এরা একসাথে বসে না। শুধু 'my book' সঠিক।", rule: "Conflict" }, 
            { en: "these books (Not 'this these books')", bn: "Books যেহেতু Plural, তাই এর আগে Singular 'this' বসবে না, 'these' বসবে।", rule: "Number Match" }, 
            { en: "I saw a man... the man smiled.", bn: "প্রথমবার পরিচয়ে 'a' বসে, পরেরবার নির্দিষ্ট হলে 'the' বসে।", rule: "Article Flow" }
        ] 
    },
    { 
        id: 70, 
        title: "Restrictive vs Non-restrictive", 
        subtitle: "Comma Usage with Clauses", 
        icon: "fa-quote-left", 
        concept: "অপরিহার্য তথ্য (Restrictive) হলে কমা বসে না। অতিরিক্ত তথ্য (Non-restrictive) হলে কমা ব্যবহার করতে হয়।", 
        examples: [
            { en: "The man who lives next door...", bn: "কোন লোকটি? পাশের বাড়ির লোকটি। এটি অপরিহার্য তথ্য তাই কমা নেই।", rule: "Restrictive" }, 
            { en: "My brother, who lives abroad,...", bn: "আমার ভাই (যে বিদেশে থাকে)... এখানে ভাই নির্দিষ্টই, তাই বাড়তি তথ্যের জন্য কমা বসেছে।", rule: "Non-restrictive" }, 
            { en: "The book that I bought...", bn: "বইটি নির্দিষ্ট করতে 'that I bought' জরুরি, তাই কমা বসেনি।", rule: "Restrictive" }
        ] 
    },
    { 
        id: 71, 
        title: "Nominalisation", 
        subtitle: "Verb as Noun Subject", 
        icon: "fa-font", 
        concept: "Verb-কে Noun হিসেবে (Gerund বা Infinitive) বাক্যের Subject হিসেবে ব্যবহার করা যায়।", 
        examples: [
            { en: "Reading is good for the mind.", bn: "এখানে 'Read' (Verb)-কে Gerund 'Reading' বানিয়ে Subject হিসেবে ব্যবহার করা হয়েছে।", rule: "Gerund Subj" }, 
            { en: "To err is human.", bn: "এখানে 'To err' (Infinitive) বাক্যের Subject হিসেবে বসেছে।", rule: "Inf Subj" }, 
            { en: "Swimming helps us stay fit.", bn: "Swimming এখানে Noun-এর কাজ করছে এবং বাক্যের Subject।", rule: "Gerund Subj" }
        ] 
    },
    { 
        id: 72, 
        title: "Punctuation Rule", 
        subtitle: "Introductory Clause Comma", 
        icon: "fa-pen-nib", 
        concept: "বাক্যের শুরুতে যদি কোনো Introductory phrase বা Clause থাকে, তবে তার পরে কমা (,) দেওয়া বাধ্যতামূলক।", 
        examples: [
            { en: "After the game, we went home.", bn: "বাক্যের শুরুতে 'After the game' একটি Phrase, তাই এর পর কমা বসেছে।", rule: "Intro Comma" }, 
            { en: "In the morning, she reads books.", bn: "সময়বাচক Phrase 'In the morning' শুরুতে থাকায় কমা ব্যবহার হয়েছে।", rule: "Time Comma" }, 
            { en: "Because it was raining, we stayed.", bn: "কারণবাচক Clause শুরুতে থাকায় মূল বাক্যের আগে কমা বসেছে।", rule: "Clause Comma" }
        ] 
    },
    { 
        id: 73, 
        title: "Capitalisation Rules", 
        subtitle: "Proper Nouns & Titles", 
        icon: "fa-a", 
        concept: "Proper Noun (নাম, দেশ), Title (উপাধি) এবং ভাষার নাম সর্বদা বড় হাতের অক্ষর (Capital Letter) দিয়ে শুরু হয়।", 
        examples: [
            { en: "I visited India last year.", bn: "India একটি দেশের নাম (Proper Noun), তাই 'I' বড় হাতের।", rule: "Proper Noun" }, 
            { en: "She met Professor Roy.", bn: "Professor এখানে উপাধি (Title), তাই 'P' বড় হাতের।", rule: "Title" }, 
            { en: "He studies English.", bn: "English একটি ভাষার নাম, তাই 'E' বড় হাতের হয়েছে।", rule: "Language" }
        ] 
    },
    { 
        id: 74, 
        title: "Preposition Traps", 
        subtitle: "Common Confusions", 
        icon: "fa-exclamation", 
        concept: "Arrive in (শহর/দেশ) vs Arrive at (নির্দিষ্ট স্থান)। Different from (সঠিক) vs Different than (ভুল)। On time (ঠিক সময়ে) vs In time (সময়ের আগে)।", 
        examples: [
            { en: "We arrived in Kolkata / at the station.", bn: "বড় জায়গা (Kolkata) হলে 'in', আর ছোট পয়েন্ট (Station) হলে 'at' বসে।", rule: "Place Prep" }, 
            { en: "This is different from that.", bn: "Different-এর সাথে সর্বদা 'from' বসে, 'than' বসে না।", rule: "Collocation" }, 
            { en: "Reached on time vs in time.", bn: "On time = ঠিক নির্ধারিত সময়ে। In time = সময়ের একটু আগে (যাতে দেরি না হয়)।", rule: "Time Prep" }
        ] 
    },
    { 
        id: 75, 
        title: "Ellipsis & Substitution", 
        subtitle: "Avoiding Repetition", 
        icon: "fa-scissors", 
        concept: "পুনরাবৃত্তি এড়াতে শব্দ বাদ দেওয়া (Ellipsis) বা So, One, Do so ইত্যাদি ব্যবহার করা (Substitution) হয়।", 
        examples: [
            { en: "He likes tea, and so do I.", bn: "'So do I' দিয়ে বোঝানো হয়েছে যে 'আমিও চা পছন্দ করি'। পুনরাবৃত্তি এড়ানো হয়েছে।", rule: "Substitution" }, 
            { en: "Take a red pen if you need one.", bn: "এখানে 'one' শব্দটি 'pen'-এর পরিবর্তে বসেছে।", rule: "Substitution" }, 
            { en: "If you want to leave, do so quietly.", bn: "'Do so' মানে হলো 'leave'। কাজটি আবার না লিখে 'do so' ব্যবহার হয়েছে।", rule: "Action Sub" }
        ] 
    },
    { 
        id: 76, 
        title: "Linking Verb + Complement", 
        subtitle: "No Object Rule", 
        icon: "fa-link", 
        concept: "Linking Verb (be, seem, look, become) কোনো কাজ বোঝায় না, সাবজেক্টের অবস্থা বোঝায়। তাই এদের পর Object বসে না, Complement (Noun/Adjective) বসে।", 
        examples: [
            { en: "He is a doctor.", bn: "এখানে 'is' লিঙ্কিং ভার্ব এবং 'doctor' হলো সাবজেক্টের পরিচয় (Complement), অবজেক্ট নয়।", rule: "Noun Comp" }, 
            { en: "She looks happy.", bn: "Look লিঙ্কিং ভার্ব, তাই এর পর Adjective 'happy' বসেছে।", rule: "Adj Comp" }, 
            { en: "He became the leader.", bn: "Become লিঙ্কিং ভার্ব, 'leader' হলো তার নতুন পরিচয়।", rule: "Identity" }
        ] 
    },
    { 
        id: 77, 
        title: "Passive Voice Formation", 
        subtitle: "Be + V3 Rules", 
        icon: "fa-hammer", 
        concept: "Passive Voice মানেই Be verb + V3। Tense অনুযায়ী Be verb পাল্টায়: Present Perfect-এ 'has been', Continuous-এ 'being', Past Perfect-এ 'had been' বসে।", 
        examples: [
            { en: "The work has been completed.", bn: "Present Perfect Tense-এ Passive করতে 'has been' + V3 বসেছে।", rule: "Perfect Passive" }, 
            { en: "The job is being done.", bn: "Present Continuous-এ Passive করতে 'being' + V3 বসেছে।", rule: "Continuous Passive" }, 
            { en: "The car had been repaired.", bn: "Past Perfect-এ Passive করতে 'had been' + V3 ব্যবহৃত হয়েছে।", rule: "Past Perfect" }
        ] 
    },
    { 
        id: 78, 
        title: "Sequence of Tenses", 
        subtitle: "Backshift Rule", 
        icon: "fa-clock-rotate-left", 
        concept: "Main verb যদি Past tense হয়, তবে Subordinate clause-এর Tense সাধারণত এক ধাপ অতীতে পিছিয়ে যায় (Backshift হয়)।", 
        examples: [
            { en: "He said that he was tired.", bn: "Main verb 'said' (Past), তাই 'is tired' বদলে 'was tired' হয়েছে।", rule: "Pres → Past" }, 
            { en: "She thought that he would come.", bn: "'Thought' (Past) থাকায় 'will' বদলে 'would' হয়েছে।", rule: "Future → Conditional" }, 
            { en: "They realised she had left.", bn: "'Realised' (Past) থাকায় 'left' (Past) বদলে Past Perfect 'had left' হয়েছে।", rule: "Past → Past Perf" }
        ] 
    },
    { 
        id: 79, 
        title: "Relative Pronoun Omission", 
        subtitle: "Dropping That/Whom", 
        icon: "fa-eraser", 
        concept: "Relative pronoun (that, which, whom) যদি Object হিসেবে বসে, তবে তা উহ্য রাখা যায়। কিন্তু Subject হিসেবে থাকলে বাদ দেওয়া যায় না।", 
        examples: [
            { en: "The book (that) I bought...", bn: "এখানে 'that' হলো Object (যা আমি কিনেছি), তাই এটি বাদ দেওয়া বা উহ্য রাখা যায়।", rule: "Object Drop" }, 
            { en: "The girl (whom) you met...", bn: "এখানে 'whom' হলো Object (যার সাথে দেখা করেছ), তাই এটি বাদ দেওয়া সম্ভব।", rule: "Object Drop" }, 
            { en: "The movie (which) we watched...", bn: "এখানেও 'which' অবজেক্ট হিসেবে থাকায় এটি উহ্য রাখা যেতে পারে।", rule: "Object Drop" }
        ] 
    },
    { 
        id: 80, 
        title: "Determiner Order", 
        subtitle: "Quantifier + Article", 
        icon: "fa-arrow-down-1-9", 
        concept: "Quantifier এবং Article-এর ক্রম নির্দিষ্ট। যেমন: All the..., Most of the...। 'The all' বা 'The most of' বলা ভুল।", 
        examples: [
            { en: "All the students passed.", bn: "নিয়ম হলো: Quantifier (All) + Article (the) + Noun।", rule: "All The" }, 
            { en: "Most of the people left.", bn: "Most of-এর পরে 'the' বসে, আগে নয়।", rule: "Most Of The" }, 
            { en: "A lot of water is needed.", bn: "A lot of-এর পরে সরাসরি Noun বসে।", rule: "Quantifier" }
        ] 
    },
    { 
        id: 81, 
        title: "Verb Aspect", 
        subtitle: "Simple vs Continuous vs Perfect", 
        icon: "fa-eye", 
        concept: "Simple = কাজটি সম্পূর্ণ (Completed)। Continuous = কাজটি চলছে (Ongoing)। Perfect = কাজের ফলাফল বর্তমান। Perfect Continuous = দীর্ঘ সময় ধরে চলছে।", 
        examples: [
            { en: "I worked yesterday.", bn: "আমি কাজ করেছিলাম—এটি একটি সাধারণ অতীত ঘটনা (Simple Past)।", rule: "Completed" }, 
            { en: "I was working when he called.", bn: "আমি কাজ করছিলাম—কাজটি তখন চলছিল (Continuous)।", rule: "Ongoing" }, 
            { en: "I have been working for hours.", bn: "আমি অনেকক্ষণ ধরে কাজ করছি—দীর্ঘ সময় বোঝাচ্ছে (Perfect Continuous)।", rule: "Duration" }
        ] 
    },
    { 
        id: 82, 
        title: "Formality in Requests", 
        subtitle: "Would vs Could vs Will", 
        icon: "fa-hand-holding-heart", 
        concept: "Politeness-এর মাত্রা: 'Would you mind + ing' (সবচেয়ে বিনীত), 'Could you + V1' (বিনীত), 'Will you + V1' (সাধারণ)।", 
        examples: [
            { en: "Would you mind opening the door?", bn: "'Would you mind' হলো সবচেয়ে ভদ্র অনুরোধ, এর পরে সর্বদা Verb+ing বসে।", rule: "Most Polite" }, 
            { en: "Could you help me?", bn: "'Could' ব্যবহার করে বিনীতভাবে অনুরোধ করা হয়।", rule: "Polite" }, 
            { en: "Will you pass the salt?", bn: "'Will' হলো সাধারণ অনুরোধ, বন্ধুদের সাথে বলা যায়।", rule: "Neutral" }
        ] 
    },
    { 
        id: 83, 
        title: "Plural-Looking Singulars", 
        subtitle: "News, Physics, Politics", 
        icon: "fa-glasses", 
        concept: "কিছু Noun দেখতে Plural (শেষে s আছে) মনে হলেও আসলে তারা Singular এবং Singular Verb নেয়। যেমন: News, Physics, Mathematics, Politics।", 
        examples: [
            { en: "The news is surprising.", bn: "'News' শব্দটির শেষে 's' থাকলেও এটি Singular, তাই Verb 'is' হয়েছে।", rule: "Singular Noun" }, 
            { en: "Physics is difficult.", bn: "Physics একটি বিষয়ের নাম (Singular), তাই Verb Singular হয়েছে।", rule: "Academic Subj" }, 
            { en: "Mathematics is my favourite.", bn: "Mathematics-ও একটি বিষয়ের নাম, তাই এটি Singular হিসেবে গণ্য হয়।", rule: "Singular Concept" }
        ] 
    },
    { 
        id: 84, 
        title: "Negative Inversion", 
        subtitle: "Never/Rarely at Start", 
        icon: "fa-arrow-rotate-left", 
        concept: "নেতিবাচক শব্দ (Never, Seldom, Rarely) বাক্যের শুরুতে থাকলে Inversion হয় (Subject-এর আগে Auxiliary Verb বসে)।", 
        examples: [
            { en: "Never have I seen such beauty.", bn: "Never শুরুতে থাকায় 'I have' উল্টে গিয়ে 'have I' (Inversion) হয়েছে।", rule: "Inversion" }, 
            { en: "Seldom does he speak.", bn: "Seldom শুরুতে থাকায় 'he speaks' না হয়ে 'does he speak' হয়েছে।", rule: "Inversion" }, 
            { en: "Rarely do we get chances.", bn: "Rarely শুরুতে থাকায় Auxiliary Verb 'do' সাবজেক্টের আগে এসেছে।", rule: "Inversion" }
        ] 
    },
    { 
        id: 85, 
        title: "Fronting for Emphasis", 
        subtitle: "Intro Phrase + Comma", 
        icon: "fa-bullhorn", 
        concept: "জোর দেওয়ার জন্য বাক্যের শুরুতে সময়, স্থান বা অবজেক্ট আনলে তারপরে কমা দেওয়া জরুরি।", 
        examples: [
            { en: "Tomorrow, I will visit you.", bn: "সময়কে (Tomorrow) জোর দিতে সামনে আনা হয়েছে, তাই কমা বসেছে।", rule: "Time Emphasis" }, 
            { en: "In the garden, we played.", bn: "স্থানকে (In the garden) জোর দিতে সামনে আনা হয়েছে, তাই কমা বসেছে।", rule: "Place Emphasis" }, 
            { en: "This book, I cannot read.", bn: "Object-কে (This book) জোর দিতে সামনে আনা হয়েছে।", rule: "Object Emphasis" }
        ] 
    },
    { 
        id: 86, 
        title: "Faulty Comparison", 
        subtitle: "Comparing Like Items", 
        icon: "fa-scale-balanced", 
        concept: "তুলনা সর্বদা সমজাতীয় জিনিসের মধ্যে হতে হবে। 'Marks' এর সাথে 'Ram'-এর তুলনা ভুল; 'Ram-এর Marks'-এর সাথে তুলনা করতে হবে (those of Ram)।", 
        examples: [
            { en: "Marks higher than those of Ram.", bn: "Marks-এর সাথে Marks-এর তুলনা করতে 'those of Ram' ব্যবহার করা হয়েছে।", rule: "Logical Comp" }, 
            { en: "She is smarter than I am.", bn: "Subject-এর সাথে Subject-এর তুলনা। 'Than me' এর চেয়ে 'Than I am' বেশি শুদ্ধ।", rule: "Ellipsis" }, 
            { en: "Better than the one I used.", bn: "আগের ফোনের সাথে বর্তমান ফোনের তুলনা বোঝাতে 'the one' ব্যবহার হয়েছে।", rule: "Substitution" }
        ] 
    },
    { 
        id: 87, 
        title: "Phrasal Verb Particles", 
        subtitle: "Placement Rules", 
        icon: "fa-puzzle-piece", 
        concept: "Separable Phrasal Verb-এ Object পার্টিকেলের আগে বা পরে বসতে পারে। কিন্তু Inseparable-এ Particle-এর পরেই Object বসাতে হয়।", 
        examples: [
            { en: "Made up a story / Made a story up.", bn: "Make up হলো Separable, তাই 'story' মাঝে বা শেষে বসানো দুটোই সঠিক।", rule: "Separable" }, 
            { en: "Put off the meeting / Put the meeting off.", bn: "Put off-ও Separable, তাই Object যেকোনো এক জায়গায় বসালেই চলে।", rule: "Separable" }, 
            { en: "Ran into a friend (Not 'Ran a friend into').", bn: "Run into হলো Inseparable, তাই friend-কে মাঝে বসানো যাবে না।", rule: "Inseparable" }
        ] 
    },
    { 
        id: 88, 
        title: "Fractions & Percentages", 
        subtitle: "Verb Agreement", 
        icon: "fa-chart-pie", 
        concept: "Fraction বা Percentage-এর পর 'of + Noun' থাকলে, Verb সেই Noun অনুযায়ী বসে। Noun Plural হলে Verb Plural, Uncountable হলে Singular।", 
        examples: [
            { en: "20% of the students are absent.", bn: "Students হলো Plural, তাই Verb 'are' হয়েছে।", rule: "Plural Noun" }, 
            { en: "20% of the work is done.", bn: "Work হলো Uncountable, তাই Verb 'is' হয়েছে।", rule: "Uncountable Noun" }, 
            { en: "Half of the apples are rotten.", bn: "Apples হলো Plural, তাই 'are' বসেছে।", rule: "Fraction" }
        ] 
    },
    { 
        id: 89, 
        title: "Appositives", 
        subtitle: "Essential vs Non-essential", 
        icon: "fa-quote-right", 
        concept: "Appositive যদি অপরিহার্য (Essential) হয় তবে কমা বসে না। আর যদি অতিরিক্ত তথ্য (Non-essential) দেয়, তবে দুই পাশে কমা বসে।", 
        examples: [
            { en: "My brother Raju is coming.", bn: "আমার অনেক ভাই থাকতে পারে, তাই 'Raju' নামটা বলা জরুরি (Essential)। কমা নেই।", rule: "Essential" }, 
            { en: "Raju, my brother, is coming.", bn: "রাজু নামটাই যথেষ্ট, 'my brother' বাড়তি তথ্য। তাই কমা বসেছে।", rule: "Non-essential" }, 
            { en: "India's capital, New Delhi, is crowded.", bn: "New Delhi-ই ভারতের একমাত্র রাজধানী, তাই এটি বাড়তি তথ্য হিসেবে কমার মাঝে বসেছে।", rule: "Non-essential" }
        ] 
    },
    { 
        id: 90, 
        title: "Conjunctive Adverbs", 
        subtitle: "Semicolon + Transition", 
        icon: "fa-link", 
        concept: "দুটি স্বাধীন বাক্যকে 'However', 'Therefore', 'Moreover' দিয়ে যুক্ত করতে হলে আগে সেমিকোলন (;) এবং পরে কমা (,) বসাতে হয়।", 
        examples: [
            { en: "He was tired; however, he continued.", bn: "দুটি বাক্যের মাঝে 'however' বসাতে আগে সেমিকোলন ও পরে কমা ব্যবহার হয়েছে।", rule: "Contrast" }, 
            { en: "She didn't study; therefore, she failed.", bn: "ফলাফল বোঝাতে 'therefore' বসেছে এবং সঠিক যতিচিহ্ন ব্যবহৃত হয়েছে।", rule: "Result" }, 
            { en: "I like it. Moreover, it is practical.", bn: "নতুন বাক্য শুরু করলে 'Moreover'-এর পর কমা দিতে হয়।", rule: "Addition" }
        ] 
    },
    { 
        id: 91, 
        title: "It is time / High time", 
        subtitle: "Followed by V2 (Past)", 
        icon: "fa-clock", 
        concept: "'It is time' বা 'It is high time' দিয়ে বাক্য শুরু হলে এবং পরে Subject থাকলে Verb-এর Past Indefinite form (V2) বসে।", 
        examples: [
            { en: "It is high time we went home.", bn: "Subject 'we' থাকায় 'go'-এর Past form 'went' বসেছে।", rule: "V2 Usage" }, 
            { en: "It is time you started studying.", bn: "Subject 'you' থাকায় Start-এর V2 'started' হয়েছে।", rule: "Urgency" }, 
            { en: "It is time to go.", bn: "Subject না থাকলে 'to + V1' বসে।", rule: "Infinitive" }
        ] 
    },
    { 
        id: 92, 
        title: "A number of vs The number of", 
        subtitle: "Plural vs Singular Verb", 
        icon: "fa-arrow-down-9-1", 
        concept: "'A number of' মানে 'অনেক', তাই এর পর Plural Noun ও Plural Verb বসে। কিন্তু 'The number of' মানে 'নির্দিষ্ট সংখ্যা', তাই এর পর Plural Noun হলেও Verb Singular হয়।", 
        examples: [
            { en: "A number of boys are playing.", bn: "'A number of' অনেক বোঝায়, তাই Verb 'are' (Plural) হয়েছে।", rule: "Plural Verb" }, 
            { en: "The number of boys is fifty.", bn: "ছেলেদের 'সংখ্যাটি' নির্দিষ্ট (৫০), তাই Verb 'is' (Singular) হয়েছে।", rule: "Singular Verb" }, 
            { en: "A large number of people have come.", bn: "Large number থাকলেও নিয়ম একই, Plural Verb (have) হবে।", rule: "Plural Verb" }
        ] 
    },
    { 
        id: 93, 
        title: "Superfluous Expressions", 
        subtitle: "Avoid Redundancy", 
        icon: "fa-ban", 
        concept: "একই অর্থবোধক দুটি শব্দ পাশাপাশি বসানো ভুল। যেমন: Return back (Back বাদ), Discuss about (About বাদ), Enter into (Into বাদ - জায়গার ক্ষেত্রে)।", 
        examples: [
            { en: "He returned home.", bn: "'Returned back' বলা ভুল, কারণ Return মানেই ফিরে আসা।", rule: "No 'Back'" }, 
            { en: "We discussed the matter.", bn: "'Discussed about' ভুল, কারণ Discuss মানেই কোনো কিছু 'নিয়ে' আলোচনা করা।", rule: "No 'About'" }, 
            { en: "He entered the room.", bn: "ঘরে ঢোকা বোঝাতে Enter-এর পর 'into' বসে না।", rule: "No 'Into'" }
        ] 
    },
    { 
        id: 94, 
        title: "Die of vs Die from", 
        subtitle: "Disease vs Other Causes", 
        icon: "fa-skull", 
        concept: "রোগে মারা গেলে 'Die of' বসে। কিন্তু অন্য কোনো কারণে (যেমন: অতিরিক্ত খাওয়া, তৃষ্ণা, আঘাত) মারা গেলে 'Die from' বসে।", 
        examples: [
            { en: "He died of cancer.", bn: "ক্যান্সার একটি রোগ, তাই 'of' বসেছে।", rule: "Disease" }, 
            { en: "He died from overeating.", bn: "অতিরিক্ত খাওয়া কোনো রোগ নয়, একটি কারণ, তাই 'from' বসেছে।", rule: "External Cause" }, 
            { en: "He died from a wound.", bn: "আঘাতজনিত কারণে মৃত্যু, তাই 'from' ব্যবহৃত হয়েছে।", rule: "Injury" }
        ] 
    },
    { 
        id: 95, 
        title: "Made of vs Made from", 
        subtitle: "Physical vs Chemical Change", 
        icon: "fa-hammer", 
        concept: "যদি তৈরির পরেও মূল উপাদান দেখা যায় (Physical change), তবে 'Made of'। আর যদি উপাদানটি সম্পূর্ণ বদলে যায় (Chemical change), তবে 'Made from' বসে।", 
        examples: [
            { en: "The chair is made of wood.", bn: "চেয়ার তৈরির পরেও কাঠ দেখা যায়, তাই 'Made of' বসেছে।", rule: "Physical" }, 
            { en: "Paper is made from wood.", bn: "কাগজ তৈরির পর কাঠ আর চেনা যায় না, রূপ বদলে গেছে, তাই 'Made from'।", rule: "Chemical" }, 
            { en: "Cheese is made from milk.", bn: "দুধ থেকে পনির হলে রূপ পরিবর্তন হয়, তাই 'Made from'।", rule: "Chemical" }
        ] 
    },
    { 
        id: 96, 
        title: "Comprise vs Consist of", 
        subtitle: "Active vs Passive", 
        icon: "fa-layer-group", 
        concept: "Active voice-এ 'Comprise'-এর পর 'of' বসে না। কিন্তু 'Consist'-এর পর সর্বদা 'of' বসে। Passive voice-এ 'Comprised of' হয়।", 
        examples: [
            { en: "The team comprises 11 players.", bn: "Active Voice-এ Comprises-এর পর 'of' বসেনি।", rule: "No 'Of'" }, 
            { en: "The team consists of 11 players.", bn: "Consists-এর সাথে সর্বদা 'of' বসে।", rule: "Fixed Prep" }, 
            { en: "The team is comprised of 11 players.", bn: "Passive Voice (is comprised) হলে 'of' বসানো যায়।", rule: "Passive" }
        ] 
    },
    { 
        id: 97, 
        title: "Reflexive Pronouns (Avail/Enjoy)", 
        subtitle: "Mandatory Usage", 
        icon: "fa-user-check", 
        concept: "Avail, Enjoy, Absent, Pride ইত্যাদি Verb-এর পর যদি Object না থাকে, তবে Subject অনুযায়ী Reflexive Pronoun (myself, himself) বসাতে হয়।", 
        examples: [
            { en: "I availed myself of the chance.", bn: "Avail-এর পর সর্বদা Reflexive Pronoun (myself) এবং 'of' বসে।", rule: "Avail + Self" }, 
            { en: "He enjoyed himself at the party.", bn: "পার্টিতে কী উপভোগ করেছে তা বলা নেই (Object নেই), তাই 'himself' বসেছে।", rule: "Enjoy + Self" }, 
            { en: "He absented himself from the class.", bn: "Absent ভার্ব হিসেবে বসলে Reflexive Pronoun নেয়।", rule: "Absent + Self" }
        ] 
    },
    { 
        id: 98, 
        title: "Possessive with Gerund", 
        subtitle: "My doing, Not Me doing", 
        icon: "fa-quote-left", 
        concept: "Gerund (Verb+ing)-এর আগে Noun বা Pronoun থাকলে তা Possessive Case (My, His, Her, Ram's) হয়। Objective case (Me, Him) হয় না।", 
        examples: [
            { en: "I don't like his going there.", bn: "'Going' হলো Gerund, তাই এর আগে 'him' না বসে 'his' বসেছে।", rule: "Possessive" }, 
            { en: "Please excuse my coming late.", bn: "'Coming' জেরান্ড, তাই 'me' না বসে 'my' বসেছে।", rule: "Possessive" }, 
            { en: "He insisted on Ram's playing.", bn: "'Playing'-এর আগে Ram-এর সাথে 's (Possessive) যুক্ত হয়েছে।", rule: "Noun Possessive" }
        ] 
    },
    { 
        id: 99, 
        title: "One of the ... Relative Pronoun", 
        subtitle: "Plural Verb Rule", 
        icon: "fa-users-viewfinder", 
        concept: "'One of the + Plural Noun + Who/Which/That' থাকলে Relative Pronoun-এর পরের Verb-টি Plural হয়।", 
        examples: [
            { en: "He is one of the boys who are ready.", bn: "এখানে 'who' দ্বারা সব ছেলেদের (boys) বোঝানো হচ্ছে, তাই Verb 'are' (Plural) হয়েছে।", rule: "Relative Plural" }, 
            { en: "This is one of the books that are lost.", bn: "'That' দ্বারা books-কে নির্দেশ করা হচ্ছে, তাই 'are' বসেছে।", rule: "Antecedent" }, 
            { en: "Only one of the boys is ready.", bn: "যদি 'Only' থাকে, তবে অর্থ বদলে সিঙ্গুলার হয়ে যায়, তখন Verb 'is' হবে।", rule: "Exception" }
        ] 
    },
    { 
        id: 100, 
        title: "Too much vs Much too", 
        subtitle: "Noun vs Adjective", 
        icon: "fa-scale-unbalanced-flip", 
        concept: "'Too much' + Noun (অতিরিক্ত কিছু)। 'Much too' + Adjective (অতিরিক্ত গুণ/দোষ)। মনে রাখার উপায়: Much শেষে থাকলে Noun বসে।", 
        examples: [
            { en: "He has too much money.", bn: "Money হলো Noun, তাই তার আগে 'Too much' বসেছে।", rule: "Too much + Noun" }, 
            { en: "It is much too painful.", bn: "Painful হলো Adjective, তাই তার আগে 'Much too' বসেছে।", rule: "Much too + Adj" }, 
            { en: "There is too much sugar.", bn: "Sugar নাউন, তাই Too much ব্যবহৃত হয়েছে।", rule: "Structure" }
        ] 
    },
    { 
        id: 101, 
        title: "Beside vs Besides", 
        subtitle: "By side vs In addition", 
        icon: "fa-chair", 
        concept: "'Beside' মানে 'পাশে'। 'Besides' মানে 'তাছাড়া' বা 'অধিকন্তু' (In addition to)।", 
        examples: [
            { en: "He sat beside me.", bn: "সে আমার 'পাশে' বসেছিল।", rule: "Position" }, 
            { en: "Besides money, he wants fame.", bn: "টাকা 'ছাড়াও' সে খ্যাতি চায়।", rule: "Addition" }, 
            { en: "Beside the river.", bn: "নদীর তীরে বা পাশে।", rule: "Position" }
        ] 
    },
    { 
        id: 102, 
        title: "Seldom or Never", 
        subtitle: "Fixed Phrase", 
        icon: "fa-clock", 
        concept: "সঠিক ফ্রেজটি হলো 'Seldom or never' অথবা 'Seldom if ever'। কিন্তু 'Seldom or ever' বলা ভুল।", 
        examples: [
            { en: "He seldom or never visits us.", bn: "সে আমাদের এখানে কদাচিৎ অথবা কখনোই আসে না। এটি সঠিক।", rule: "Seldom or Never" }, 
            { en: "He seldom if ever drinks.", bn: "সে পান করে না বললেই চলে। এটিও সঠিক গঠন।", rule: "Seldom if Ever" }, 
            { en: "❌ Seldom or ever.", bn: "এই গঠনটি ভুল, ব্যবহার করা যাবে না।", rule: "Incorrect" }
        ] 
    },
    { 
        id: 103, 
        title: "Noun + Prep + Same Noun", 
        subtitle: "Singular Structure", 
        icon: "fa-copy", 
        concept: "যদি Preposition-এর আগে ও পরে একই Noun থাকে, তবে উভয় Noun এবং পরবর্তী Verb সর্বদা Singular হবে।", 
        examples: [
            { en: "Village after village was destroyed.", bn: "'Villages after villages' ভুল। Singular Noun ও Singular Verb (was) হবে।", rule: "Singular" }, 
            { en: "Page after page was read.", bn: "পরপর পৃষ্ঠা বোঝাতে Singular form ব্যবহার করতে হয়।", rule: "Singular" }, 
            { en: "Day by day.", bn: "Days by days হয় না।", rule: "Singular" }
        ] 
    },
    { 
        id: 104, 
        title: "Hyphenated Nouns", 
        subtitle: "Never Plural", 
        icon: "fa-minus", 
        concept: "Compound Noun-এ যদি হাইফেন থাকে এবং সেটি Adjective-এর মতো কাজ করে, তবে তা সর্বদা Singular হয়।", 
        examples: [
            { en: "A five-star hotel.", bn: "'Five-stars' বলা ভুল। হাইফেন থাকলে Singular (star) হবে।", rule: "Singular Modifier" }, 
            { en: "A ten-rupee note.", bn: "'Ten-rupees note' ভুল। Note-কে মডিফাই করছে তাই Rupee সিঙ্গুলার।", rule: "Singular Modifier" }, 
            { en: "He gave me two five-hundred-rupee notes.", bn: "Notes প্লুরাল হতে পারে, কিন্তু 'five-hundred-rupee' অংশটি সিঙ্গুলার থাকবে।", rule: "Complex Modifier" }
        ] 
    },
    { 
        id: 105, 
        title: "Uncountable Nouns List", 
        subtitle: "Always Singular", 
        icon: "fa-list", 
        concept: "Scenery, Poetry, Furniture, Advice, Information, Luggage, Baggage, Jewellery, Equipment—এরা সর্বদা Singular। এদের সাথে s/es যোগ হয় না।", 
        examples: [
            { en: "The scenery of Kashmir is beautiful.", bn: "'Sceneries' বলা ভুল। Verb-ও Singular (is) হবে।", rule: "No Plural" }, 
            { en: "He gave me some information.", bn: "'Informations' বলা ভুল।", rule: "No Plural" }, 
            { en: "All my luggage is packed.", bn: "'Luggages' হয় না এবং Verb Singular হয়।", rule: "No Plural" }
        ] 
    },
    { 
        id: 106, 
        title: "Plural Only Nouns", 
        subtitle: "Cattle, Police, Gentry", 
        icon: "fa-users", 
        concept: "Cattle, Police, Gentry, Peasantry, Clergy, Poultry—শব্দগুলো দেখতে Singular মনে হলেও এরা আসলে Plural এবং সর্বদা Plural Verb নেয়।", 
        examples: [
            { en: "The cattle are grazing.", bn: "'Cattles' হয় না, কিন্তু Verb Plural (are) হয়।", rule: "Plural Verb" }, 
            { en: "The police have arrived.", bn: "Police পুরো বাহিনীকে বোঝায়, তাই Verb Plural (have) হয়েছে।", rule: "Plural Verb" }, 
            { en: "The gentry were invited.", bn: "Gentry (ভদ্রসমাজ) প্লুরাল, তাই 'were' বসেছে।", rule: "Plural Verb" }
        ] 
    },
    { 
        id: 107, 
        title: "Pronoun Order (2-3-1)", 
        subtitle: "Good Manners Rule", 
        icon: "fa-arrow-down-1-9", 
        concept: "সাধারণ বাক্যে একাধিক Person থাকলে ক্রম হবে: Second person (2) → Third person (3) → First person (1)। দোষ স্বীকার করলে ক্রম হবে 1-2-3।", 
        examples: [
            { en: "You, he and I will go.", bn: "সাধারণ কাজ, তাই ক্রম 2-3-1 (You-He-I) মেনে চলা হয়েছে।", rule: "Normal (231)" }, 
            { en: "I, you and he are guilty.", bn: "অপরাধ বা দোষ স্বীকার করায় ক্রম 1-2-3 হয়েছে।", rule: "Confession (123)" }, 
            { en: "He and I are friends.", bn: "2nd person নেই, তাই 3-1 ক্রম ব্যবহার হয়েছে।", rule: "Partial (231)" }
        ] 
    },
    { 
        id: 108, 
        title: "Objective Case Usage", 
        subtitle: "Let / Prepositions", 
        icon: "fa-bullseye", 
        concept: "Let এবং যেকোনো Preposition-এর পর Pronoun-এর Objective form (me, him, her, them) বসে। Subjective form (I, he) বসে না।", 
        examples: [
            { en: "Let him and me go.", bn: "Let-এর পর 'he' বা 'I' না বসে 'him' এবং 'me' বসেছে।", rule: "After Let" }, 
            { en: "He laughed at her and me.", bn: "'At' (Preposition)-এর পর Objective case 'her' ও 'me' বসেছে।", rule: "After Prep" }, 
            { en: "Between you and me.", bn: "Between একটি Preposition, তাই 'I' না হয়ে 'me' হয়েছে।", rule: "After Prep" }
        ] 
    },
    { 
        id: 109, 
        title: "Subjective Complement", 
        subtitle: "It is I, not It is Me", 
        icon: "fa-user-tag", 
        concept: "'It is' বা 'It was' দিয়ে বাক্য শুরু হলে এরপর Pronoun-এর Subjective form (I, he, she) বসে। কথ্য ভাষায় 'Me' চলে কিন্তু ফরমাল গ্রামারে 'I' সঠিক।", 
        examples: [
            { en: "It is I who helped you.", bn: "ফরমাল ইংলিশে 'It is me' ভুল, 'It is I' সঠিক।", rule: "Subjective" }, 
            { en: "It was he who did it.", bn: "'It was him' ভুল, 'he' ব্যবহার করতে হবে।", rule: "Subjective" }, 
            { en: "If I were he.", bn: "Subjunctive mood-এও Subjective form বসে।", rule: "Subjective" }
        ] 
    },
    { 
        id: 110, 
        title: "Adverb of Sensation", 
        subtitle: "Smell/Taste + Adjective", 
        icon: "fa-nose", 
        concept: "Sense verbs (Look, Seem, Taste, Smell, Feel)-এর পর Adverb (ly যুক্ত শব্দ) বসে না, Adjective বসে।", 
        examples: [
            { en: "The flower smells sweet.", bn: "'Sweetly' (Adverb) বলা ভুল, কারণ এটি ফুলের গুণ (Adj) বোঝাচ্ছে।", rule: "Adj, not Adv" }, 
            { en: "He looks angry.", bn: "'Angrily' হবে না, কারণ এটি তার অবস্থা বোঝাচ্ছে।", rule: "Adj, not Adv" }, 
            { en: "The soup tastes good.", bn: "'Well' (Adverb) না বসে 'Good' (Adjective) বসেছে।", rule: "Adj, not Adv" }
        ] 
    },
    { 
        id: 111, 
        title: "Double Superlative/Comparative", 
        subtitle: "Comparatively + Positive", 
        icon: "fa-xmark", 
        concept: "'Comparatively' বা 'Relatively' শব্দের পর সর্বদা Positive Degree-এর Adjective বসে। Comparative Degree বসানো ভুল।", 
        examples: [
            { en: "The weather is comparatively good.", bn: "'Comparatively better' বলা ভুল (Superfluous), 'good' সঠিক।", rule: "Positive Degree" }, 
            { en: "He is relatively healthy.", bn: "'Relatively healthier' ভুল।", rule: "Positive Degree" }, 
            { en: "Better than yesterday.", bn: "Comparatively না থাকলে সরাসরি Comparative form ব্যবহার করা যায়।", rule: "Standard Comp" }
        ] 
    },
    { 
        id: 112, 
        title: "Dangling Participle (Being)", 
        subtitle: "Subject Requirement", 
        icon: "fa-cloud-rain", 
        concept: "'Being' দিয়ে বাক্য শুরু হলে দেখতে হবে প্রথম অংশের Subject দ্বিতীয় অংশের সাথে মিলছে কিনা। না মিললে 'It' বা উপযুক্ত Subject যোগ করতে হবে।", 
        examples: [
            { en: "It being a rainy day, I stayed home.", bn: "'Being a rainy day, I...' লিখলে অর্থ হয় 'আমিই বৃষ্টির দিন'। তাই 'It' যোগ করা জরুরি।", rule: "Subject Mismatch" }, 
            { en: "Being poor, he needs help.", bn: "এখানে 'সে' নিজেই গরিব, তাই Subject (He) ঠিক আছে। আলাদা Subject লাগেনি।", rule: "Subject Match" }, 
            { en: "The day being hot, we rested.", bn: "দিনটি গরম ছিল, তাই 'The day' উল্লেখ করা হয়েছে।", rule: "Explicit Subject" }
        ] 
    },
    { 
        id: 113, 
        title: "Confusing Pairs: Lay vs Lie", 
        subtitle: "Transitive vs Intransitive", 
        icon: "fa-bed", 
        concept: "Lie (শোয়া) -> lay (শুলো) -> lain (শুয়েছে)। Lay (রাখা/ডিম পাড়া) -> laid -> laid। মনে রাখবেন: Lie-এর পর Object থাকে না, Lay-এর পর থাকে।", 
        examples: [
            { en: "He lay under the tree.", bn: "সে গাছের নিচে শুয়েছিল (Lie-এর Past Tense)।", rule: "Lie (Recline)" }, 
            { en: "She laid the book on the table.", bn: "সে বইটি রাখল (Lay-এর Past Tense)। Object (book) আছে।", rule: "Lay (Put)" }, 
            { en: "The hen has laid an egg.", bn: "ডিম পাড়া অর্থে Lay (v3 laid) ব্যবহৃত হয়।", rule: "Lay (Produce)" }
        ] 
    },
    { 
        id: 114, 
        title: "Wait vs Await", 
        subtitle: "Preposition Usage", 
        icon: "fa-hourglass-half", 
        concept: "'Wait' এর পর 'for' বসে, কিন্তু 'Await' এর পর কোনো Preposition বসে না। Await = Wait for।", 
        examples: [
            { en: "I am waiting for you.", bn: "Wait-এর সাথে person থাকলে 'for' বসে।", rule: "Wait for" }, 
            { en: "I am awaiting your reply.", bn: "Awaiting-এর পর 'for' বসে না।", rule: "Await (No Prep)" }, 
            { en: "He awaits the result.", bn: "Direct Object বসেছে।", rule: "Transitive" }
        ] 
    },
    { 
        id: 115, 
        title: "Prevent/Prohibit + From", 
        subtitle: "Gerund Required", 
        icon: "fa-shield-halved", 
        concept: "Prevent, Prohibit, Abstain, Refrain ইত্যাদি শব্দের পর Preposition 'from' বসে এবং তারপর Verb+ing (Gerund) হয়।", 
        examples: [
            { en: "He prevented me from going.", bn: "'To go' হবে না। From + going সঠিক।", rule: "From + Ing" }, 
            { en: "Abstain from smoking.", bn: "ধূমপান থেকে বিরত থাকো। From + Gerund।", rule: "From + Ing" }, 
            { en: "Prohibited from entering.", bn: "প্রবেশে নিষেধ। From + Gerund।", rule: "From + Ing" }
        ] 
    },
    { 
        id: 116, 
        title: "Hardly/Scarcely ... When", 
        subtitle: "Paired Conjunction", 
        icon: "fa-link", 
        concept: "Hardly বা Scarcely থাকলে বাক্যের পরের অংশে 'When' বা 'Before' বসে। কখনোই 'Than' বা 'Then' বসে না।", 
        examples: [
            { en: "Hardly had I reached when it rained.", bn: "'Than' ব্যবহার করা ভুল। When সঠিক।", rule: "Correct Pair" }, 
            { en: "Scarcely had she left when he arrived.", bn: "Scarcely-এর সাথেও When বসে।", rule: "Correct Pair" }, 
            { en: "No sooner ... than.", bn: "তুলনা: No sooner-এর সাথে Than বসে, কিন্তু Hardly-র সাথে When।", rule: "Contrast" }
        ] 
    },
    { 
        id: 117, 
        title: "Possessive 's with Things", 
        subtitle: "Personification Exception", 
        icon: "fa-tag", 
        concept: "জড় বস্তুর সাথে সাধারণত 's হয় না (Table's leg ভুল)। কিন্তু সময়, ওজন, বা জায়গার সাথে 's ব্যবহার করা যায় (A day's leave)।", 
        examples: [
            { en: "The leg of the table.", bn: "'Table's leg' ভুল, কারণ টেবিল জড় বস্তু।", rule: "Of Structure" }, 
            { en: "A week's holiday.", bn: "সময় বোঝাচ্ছে, তাই 's সঠিক।", rule: "Time Exception" }, 
            { en: "At arm's length.", bn: "এটি একটি Idiom এবং দূরত্বের একক, তাই সঠিক।", rule: "Measurement" }
        ] 
    },
    { 
        id: 118, 
        title: "Know + How to", 
        subtitle: "Skill Instruction", 
        icon: "fa-brain", 
        concept: "'Know' verb-এর পর যদি কোনো দক্ষতা বা Skill বোঝায়, তবে সরাসরি Infinitive না বসিয়ে 'how to + V1' বসাতে হয়।", 
        examples: [
            { en: "I know how to swim.", bn: "'I know to swim' ভুল। সাঁতার একটি দক্ষতা, তাই 'how to' লাগবে।", rule: "Know + How" }, 
            { en: "Do you know how to drive?", bn: "ড্রাইভিং একটি স্কিল, তাই How to ব্যবহার হয়েছে।", rule: "Know + How" }, 
            { en: "He knows English.", bn: "Noun (English) থাকলে How to লাগে না।", rule: "Noun Direct" }
        ] 
    },
    { 
        id: 119, 
        title: "Prefer / Senior / Junior", 
        subtitle: "Followed by 'To'", 
        icon: "fa-up-right-from-square", 
        concept: "Prefer, Senior, Junior, Superior, Inferior, Prior—এই শব্দগুলোর পর তুলনার ক্ষেত্রে 'than' বসে না, সর্বদা 'to' বসে।", 
        examples: [
            { en: "He is senior to me.", bn: "'Senior than me' ভুল। ল্যাটিন Adjective-এর পর to বসে।", rule: "Latin Adj" }, 
            { en: "I prefer tea to coffee.", bn: "'Prefer than' হয় না। দুটি জিনিসের মধ্যে পছন্দে 'to' বসে।", rule: "Preference" }, 
            { en: "This is superior to that.", bn: "Superior-এর পর 'to' বসেছে।", rule: "Latin Adj" }
        ] 
    },
    { 
        id: 120, 
        title: "Unless vs Until", 
        subtitle: "Condition vs Time", 
        icon: "fa-clock", 
        concept: "Unless মানে 'যদি না' (Condition)। Until মানে 'যতক্ষণ না' (Time)। এদের পরে 'Not' বসে না।", 
        examples: [
            { en: "Unless you work hard, you will fail.", bn: "শর্ত বোঝাচ্ছে (কাজ না করলে), তাই Unless বসেছে।", rule: "Condition" }, 
            { en: "Wait until I return.", bn: "সময় বোঝাচ্ছে (ফিরে আসা পর্যন্ত), তাই Until বসেছে।", rule: "Time" }, 
            { en: "Unless you study.", bn: "'Unless you don't study' ভুল, কারণ Unless নিজেই নেতিবাচক।", rule: "No Not" }
        ] 
    }
];