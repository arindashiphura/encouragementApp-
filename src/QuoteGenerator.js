import React, { useState } from 'react';
import './App.css';

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Don’t wait for the perfect moment, take the moment and make it perfect. – Unknown",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The best way to predict the future is to create it. – Abraham Lincoln",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "You are capable of amazing things. – Unknown",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "The best revenge is massive success. – Frank Sinatra",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Act as if what you do makes a difference. It does. – William James",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Everything you can imagine is real. – Pablo Picasso",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Dream big and dare to fail. – Norman Vaughan",
    "When you feel like quitting, remember why you started. – Unknown",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
    "Everything has beauty, but not everyone sees it. – Confucius",
    "Success is not measured by what you accomplish, but by the obstacles you overcome. – Booker T. Washington",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "You are stronger than you think. – Unknown",
    "When nothing goes right, go left. – Unknown",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful. – Joshua Marine",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "The secret of getting ahead is getting started. – Mark Twain",
    "The best way out is always through. – Robert Frost",
    "In the end, we only regret the chances we didn’t take. – Lewis Carroll",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "We can do anything we want to if we stick to it long enough. – Helen Keller",
    "A goal is not always meant to be reached, it often serves simply as something to aim at. – Bruce Lee",
    "If you want to achieve greatness stop asking for permission. – Unknown",
    "It’s never too late to be what you might have been. – George Eliot",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "If you can dream it, you can do it. – Walt Disney",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
    "Success is not about the destination, but the journey. – Unknown",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Your limitation—it’s only your imagination. – Unknown",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. – Unknown",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
    "A little progress each day adds up to big results. – Satya Nani",
    "You don’t have to be perfect to be amazing. – Unknown",
    "It’s not about being the best. It’s about being better than you were yesterday. – Unknown",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Stay positive, work hard, and make it happen. – Unknown",
    "There are no limits to what you can accomplish, except the limits you place on your own thinking. – Brian Tracy",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "To be the best, you must be able to handle the worst. – Wilson Kanadi",
    "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
    "Nothing is impossible. The word itself says ‘I’m possible!’ – Audrey Hepburn",
    "Everything you need is already inside you. – Unknown",
    "If you’re going through hell, keep going. – Winston Churchill",
    "When you rise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love... – Marcus Aurelius",
    "Be the change that you wish to see in the world. – Mahatma Gandhi",
    "Do not wait for leaders; do it alone, person to person. – Mother Teresa",
    "A winner is a dreamer who never gives up. – Nelson Mandela",
    "Your only limit is your mind. – Unknown",
    "Don't let yesterday take up too much of today. – Will Rogers",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "The harder you work, the luckier you get. – Gary Player",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "If you can dream it, you can do it. – Walt Disney",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t wait. The time will never be just right. – Napoleon Hill",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Life is not about waiting for the storm to pass, but about learning how to dance in the rain. – Unknown",
    "Don’t let the noise of others’ opinions drown out your own inner voice. – Steve Jobs",
    "Live life as if everything is rigged in your favor. – Rumi",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Life begins at the end of your comfort zone. – Neale Donald Walsch",
    "What you do today can improve all your tomorrows. – Ralph Marston",
    "Believe in yourself and you will be unstoppable. – Unknown",
    "Live for the moments you can’t put into words. – Unknown",
    "The best way to get started is to quit talking and begin doing. – Walt Disney"
];
const testimonies = [
    // For Students
    "Struggling with Grades: I was always the student who struggled to keep up. My grades were poor, and I felt like I wasn’t smart enough. But one day, I sat down with my teacher, and she believed in me. She didn’t give up on me, and neither did I. I worked harder, stayed focused, and not only passed my exams but excelled. Now, I’m on my way to university, something I thought was impossible.",
    
    "Overcoming a Learning Disability: Growing up with a learning disability was isolating. I couldn’t read or write like the other kids, and it hurt to see my classmates succeed while I struggled. But my parents never gave up on me. With therapy and support, I began to understand that my difference didn’t define me. Now, I’m graduating with honors, and I’ve learned that my challenges are just stepping stones to my success.",
    
    "Losing a Parent During Exams: The hardest moment in my life came when I lost my mother just days before my final exams. My world shattered, and I wanted to quit everything. But I remembered how much she believed in me. I poured all my love and memories into my studies, and I passed every exam. Her spirit lives on in my success.",
    
    "Bullying and Overcoming Self-Doubt: As a kid, I was bullied relentlessly. I was called names, humiliated, and made to feel small. It hurt deeply, and I became withdrawn. But over time, I learned to love myself and see my worth. Now, I stand proud and confident. The bullies’ words no longer define me. I am a survivor, and I have a voice.",
    
    "From Failing to Achieving: I was the student who always failed. No matter how hard I tried, it seemed like I couldn’t catch up. I felt worthless. But I refused to give up. I sought help, studied smarter, and eventually, my grades improved. Today, I’m not only passing—I’m excelling, and I know I can achieve anything I set my mind to.",
    
    // For Women
    "Escaping Domestic Violence: I spent years in an abusive relationship, feeling trapped and worthless. But one day, I found the courage to leave. I had nothing but my children and hope. Slowly, I built a new life, free from fear and filled with love. Today, I’m proud to say I’m not only surviving, but I’m thriving, and my children are growing up in a safe and loving home.",
    
    "Finding Strength After Miscarriage: I lost my baby in the early stages of pregnancy, and it broke me. I couldn’t understand why this happened, and the grief was overwhelming. But with time, I realized that my heart could heal. I’m still carrying the memory of that baby in my heart, and today, I’m stronger than I was before. I know one day, I will be a mother again.",
    
    "Overcoming Body Image Issues: I spent years hating my body, constantly comparing myself to others. I felt ugly, worthless, and inadequate. But through therapy and self-love, I started to accept myself for who I am. Today, I embrace my body with confidence and gratitude. I am beautiful, not because of my appearance, but because of my strength.",
    
    "Starting Over After Divorce: After my divorce, I felt like a failure. My dreams were shattered, and I couldn’t imagine a future. But I started to rebuild my life, one step at a time. I went back to school, started a new career, and began to love myself again. Now, I’m stronger than I ever thought possible, and I know my future is brighter than before.",
    
    "Becoming a Single Mother: When I became a single mother, I had no idea how I would make ends meet. But I prayed, worked hard, and found strength in my children’s love. Now, they’re growing up to be kind, strong individuals, and I’m proud of the life we’ve built together. Every day is a new challenge, but it’s worth it.",
    
    // For Men
    "Healing from Addiction: I was consumed by addiction for years, losing everything that mattered to me—my family, my job, and my sense of self. But one day, I hit rock bottom. I reached out for help, and with time, I found my way back. Today, I’m clean, I’m rebuilding my relationships, and I’m living the life I always dreamed of.",
    
    "Overcoming Depression: For years, I struggled with depression. I hid it well, but inside, I was falling apart. I felt like I was drowning. But eventually, I sought help, and little by little, I began to heal. Today, I’m not only surviving, I’m thriving. I have a new perspective on life, and I’m grateful for each day.",
    
    "Dealing with Fatherhood Challenges: Becoming a father was the most amazing and terrifying thing that ever happened to me. I felt unprepared, unsure of how to be a good dad. But through trial and error, and with love, I’ve learned to be the father my children need. They’ve taught me more than I could ever teach them.",
    
    "Rebuilding After Job Loss: When I lost my job, I felt like I lost my identity. I was ashamed and embarrassed. But after a lot of soul-searching and hard work, I found a new career, one that I’m passionate about. Losing my job was painful, but it led me to a much better place.",
    
    "Forgiving Myself: I spent years blaming myself for mistakes I made in my past. I couldn’t let go of the guilt and shame. But over time, I learned that forgiveness starts with me. I forgave myself, and in doing so, I found peace. Today, I’m at peace with my past, and I’m focused on building a better future.",
    
    // For Young Adults
    "Struggling with Identity: For years, I didn’t know who I was. I was constantly trying to fit in, always searching for validation. But through therapy and self-reflection, I found my true self. Today, I embrace my uniqueness, and I’m proud of the person I’ve become.",
    
    "Navigating Peer Pressure: In high school, I was constantly pressured to conform, to follow the crowd. I made some decisions that I regret. But one day, I decided to stand up for myself, to follow my own path. It wasn’t easy, but today, I’m proud of the choices I’ve made and the person I am becoming.",
    
    "Fighting Mental Health Struggles: For a long time, I struggled with anxiety and panic attacks. I felt like I was suffocating, unable to breathe. But through therapy, self-care, and a strong support system, I’ve learned how to manage my mental health. It’s an ongoing journey, but I’m not alone, and I’m stronger than I was before.",
    
    "Overcoming Academic Pressure: I put immense pressure on myself to be perfect. I was always afraid of failing. But after some tough lessons and failures, I realized that failure doesn’t define me—it’s how I rise from it. Now, I approach challenges with a growth mindset, and I’m learning to be kinder to myself.",
    
    "Breaking Free from Toxic Relationships: I was in a toxic relationship for years. I felt trapped and worthless. But one day, I found the courage to walk away. It wasn’t easy, but leaving was the best decision I ever made. Today, I’m focused on healing, self-love, and building healthier relationships.",
    
    // For Adults (50+)
    "Rediscovering Purpose After Retirement: After I retired, I felt lost. I didn’t know what my purpose was anymore. But I started volunteering, and it gave me a sense of fulfillment that I never expected. I may be retired, but I’m not done yet. I have a new purpose, and I’m living it to the fullest.",
    
    "Starting Over After Loss: I lost my spouse after 30 years of marriage, and I didn’t know how to move forward. It felt like my world had come to an end. But with time, I began to heal, surrounded by family and friends. I’ve learned that life can begin anew, even after great loss.",
    
    "Embracing Aging with Grace: I used to fear growing old, thinking that I would lose my vitality. But now, I embrace it. I’ve learned to appreciate the wisdom that comes with age, and I’m grateful for the years I’ve lived. I’ve realized that life is beautiful at any age.",
    
    "Finding Love Again After Divorce: After my divorce, I thought I would never love again. My heart had been shattered. But years later, I met someone who helped me heal, who showed me that love is not just about romance, but companionship and trust. I never thought I’d find love again, but I’m so grateful that I did.",
    
    "Overcoming Regret and Embracing the Future: Looking back, I have many regrets. I wish I had done things differently. But I’ve learned that regrets don’t define me. What matters is how I live today. I’m learning to embrace the present and look forward to the future with hope.",
    "Overcoming Addiction and Finding Purpose: I spent the better part of my twenties lost in a haze of alcohol and drugs. It was easier to numb the pain of life than face it head-on. But after hitting rock bottom, I made the decision to get help. It wasn’t easy—I went to rehab, and the days felt long, but each day without substance abuse felt like I was building a new life. It took years, but today, I’m sober, and I’ve found a new purpose. I’m now a counselor, helping others who were once like me, and I know my past doesn’t define me—it’s just a part of the journey.",
    "Overcoming Childhood Abuse: Growing up in an abusive household left me with scars I thought would never heal. I was told I wasn’t good enough, that I’d never amount to anything. For years, I carried that shame with me. But one day, I found the courage to speak up. It wasn’t easy to confront my past, but the moment I did, I felt a weight lift off me. Slowly, I began therapy and rebuilt my self-worth. Today, I’m a survivor, thriving in my career and relationships, and I have a family of my own. I now teach my children the power of love and respect.",

    "Losing a Parent to Cancer:   When I was just 18, I watched my mother battle cancer for over two years. It was the most painful experience of my life. She was my best friend, and watching her slowly fade away crushed me. But even in her final days, she never stopped encouraging me to live my life with purpose. After her death, I felt like I had lost my reason for living. I was lost for a while, but slowly I realized that she wanted me to live and honor her memory by being the best version of myself. I became a cancer research advocate and help others who are going through similar experiences.",

    "From Homelessness to Success: I was homeless for nearly two years. I had lost everything—my job, my house, my sense of self. It seemed like there was no way out. But I made a promise to myself that I would never give up. I started with small jobs, and eventually, I was able to get a stable position at a local restaurant. I worked tirelessly, saved up, and slowly got my life back together. Today, I run my own business and employ others who were once in the same situation I was in. I’m proof that you can rise from the lowest points of your life.",

    "Fighting Depression and Reclaiming Joy: For years, I lived with depression. It was a constant companion, whispering that I wasn’t good enough, that no one cared. I pushed people away because I didn’t want to burden them with my struggles. I didn’t see any way out. But then I found therapy. I started working through my feelings and realized that my depression didn’t define me. Today, I’m not just surviving; I’m thriving. I’ve become an advocate for mental health awareness and share my story to encourage others to seek help when they need it.",

    "Adoption Journey and Finding Biological Parents: Being adopted was always a part of my identity, but it didn’t become real to me until I was an adult. I always wondered about my biological parents, where I came from. The curiosity lingered for years. Finally, I decided to search for them. After months of research, I found my birth mother. Meeting her was emotional, and I was filled with questions. But the connection was instant, and we built a relationship over time. I never expected to gain so much from this search—not just answers, but a deeper understanding of who I am.",

    "Dealing with the Loss of a Child: Losing my child was the most excruciating pain I’ve ever felt. She was just 5 years old when she passed away from a sudden illness. I was consumed by grief and couldn’t imagine moving forward without her. But with time, I started to heal. I became involved in charities that support grieving parents and created a foundation in her memory. While I’ll never forget her, I now honor her life by helping others who are in the same situation. My child’s spirit lives on in the work I do.",

    "Surviving a Terrible Car Accident: The day of my car accident changed my life forever. I was driving home from work when another driver ran a red light and crashed into me. I was lucky to survive, but I sustained serious injuries. The recovery process was grueling, both physically and emotionally. There were days when I thought I couldn’t do it, but I refused to give up. After months of rehabilitation, I learned to walk again, and today I’m stronger than I was before the accident. I now speak to young drivers about the dangers of distracted driving.",

    "Turning My Life Around After Incarceration: I made some poor decisions in my youth and ended up incarcerated. The experience was humbling, and I lost years of my life. But I spent that time reflecting on my choices, learning new skills, and working toward my education. When I was released, I didn’t expect the world to welcome me with open arms, but I was determined to prove that I was more than my mistakes. Today, I run a nonprofit that helps people who’ve been incarcerated reintegrate into society. I know firsthand how difficult it can be, but I also know that everyone deserves a second chance.",

    "Surviving a Stroke and Rebuilding My Life: When I had a stroke at 45, it felt like my world came crashing down. I lost the ability to speak and had limited mobility. The first few months were dark, and I didn’t think I could recover. But my doctors and family never gave up on me, and slowly, with therapy and sheer determination, I began to make progress. It was a long road, but now, I’m back to living my life. I’ve even become a stroke survivor advocate, helping others navigate the challenges that come with such an illness.",

    "Living with a Chronic Illness and Finding Strength: Living with chronic illness was something I never imagined would happen to me. My condition made it hard to function at times, and I often felt defeated. But after years of treatment and finding the right doctors, I started taking control of my health. I focused on what I could do, not what I couldn’t. I’ve become a vocal advocate for chronic illness awareness, and I’m now more resilient than I ever thought possible. My illness may limit me in some ways, but it will never define me.",

    "Learning to Forgive and Heal After Infidelity: When I found out my partner had been unfaithful, it shattered my world. I didn’t know who I was anymore, and I felt betrayed by someone I trusted with my heart. But after months of pain and reflection, I realized that holding onto anger was only hurting me. I chose to forgive—not for them, but for me. It was a long and difficult journey, but today, I’m in a healthier relationship, and I’ve learned to prioritize my emotional health.",

    "Overcoming the Fear of Public Speaking: I’ve always been terrified of speaking in front of a crowd. In school, I would freeze up, and I would avoid any opportunities to speak. But one day, I was given the chance to give a presentation at work, and I decided it was time to face my fear. I practiced for weeks, and when the moment came, I surprised myself. It wasn’t perfect, but I did it. Today, I’m not only comfortable speaking in public, but I also mentor others who have the same fear.",

    "Leaving a Toxic Relationship: I spent years in a toxic relationship, feeling unworthy and emotionally drained. It took a long time for me to realize that I was sacrificing my happiness for someone else. But once I did, I found the strength to leave. It was the hardest thing I’ve ever done, but it was also the most liberating. Today, I’m in a healthy relationship, and I’ve learned to value myself. Leaving was the first step to becoming the person I was always meant to be.",

    "Turning My Passion for Cooking Into a Career: I’ve always loved cooking, but I didn’t think I could ever turn it into a career. I worked in a corporate job for years, but it never fulfilled me. One day, I decided to take a leap of faith and start a catering business. It wasn’t easy, and there were many moments when I thought about giving up. But today, my business is thriving, and I’m living my dream. Cooking isn’t just a passion for me—it’s my life’s work.",

    "Overcoming a Fear of Failure and Starting Over: I was terrified of failure. I had so many dreams, but the fear of not succeeding paralyzed me. I played it safe, staying in jobs that didn’t challenge me, and avoiding risks. But eventually, I realized that failure is part of the journey. I took a leap of faith, left my stable job, and started a new career. It was tough at first, but I’m finally doing something I love. Today, I’m no longer afraid to fail. I know that every setback is just a lesson learned.",

    "Surviving an Abusive Relationship: Being in an abusive relationship was something I never thought would happen to me. I had a strong support system, but somehow, I found myself trapped. It took a long time to realize that the abuse was not my fault, and it wasn’t love. One day, I packed my things and left. It wasn’t easy, but it was the best decision I ever made. Today, I’m free, and I’m helping others who are in similar situations.",

    "Losing a Business and Starting Over: I built my business from the ground up, but after a series of unfortunate events and poor decisions, I lost it all. I felt like a failure, and I wasn’t sure how I could ever recover. But I refused to give up. I learned from my mistakes, regrouped, and started a new venture. It took time, but now my business is thriving again, and I’m stronger and wiser. Losing it all taught me resilience and the importance of never giving up.",

    "Raising a Child with Special Needs: Raising a child with special needs was something I never anticipated. At first, I felt overwhelmed and unsure of what to do. But over time, I learned that my child had unique gifts, and my role as a parent was to nurture and guide them. Today, my child is thriving, and so am I. The experience has deepened my compassion and taught me the importance of patience and perseverance.",

    "Discovering the Power of Gratitude: I used to focus on everything that was wrong in my life. I complained about my job, my relationships, and my circumstances. But one day, I realized that I was missing the beauty around me. I started a gratitude journal, and over time, it shifted my perspective. I now focus on the positive things in my life, and it’s made all the difference. I’m happier, healthier, and more content. I’ve learned that gratitude is the key to a fulfilled life."




];




const bibleVerses = [
    "Isaiah 40:31 Verse: “But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.” Explanation: This verse reminds us that trusting in God will give us the strength to face challenges and overcome obstacles. When we rely on Him, we find supernatural endurance.",
    "Jeremiah 29:11 Verse: “For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you a hope and a future.” Explanation: God has good plans for each of us, filled with hope and purpose. This verse reassures us that even when life seems uncertain, God is in control, guiding us toward a bright future.",
    "Psalm 23:1 Verse: “The Lord is my shepherd; I shall not want. I shall not be discouraged, nor shall I be put to shame.” Explanation: The Lord is our faithful guide, and we must trust in Him. Even when we feel lost or overwhelmed, we can still rely on His presence and guidance.",
    "Psalm 34:23 Verse: “Let the wicked be ashamed, and let the unrighteous be burned with fire. For the Lord has judged, and His wrath is on the wicked.” Explanation: God has judged the unrighteous and wicked, and He will punish them with severe consequences. This verse encourages us to be vigilant",
    "Psalm 34:17-18 Verse: “The righteous cry out, and the Lord hears them; he delivers them from all their troubles. The Lord is close to the brokenhearted and saves those who are crushed in spirit.” Explanation: In times of sorrow and trouble, God is close and listens. He promises to deliver and heal the brokenhearted, offering comfort and restoration.",
    "Proverbs 3:5-6 Verse: “Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.” Explanation: This verse encourages us to trust God fully, even when we don’t understand the situation. By seeking His guidance, He will lead us in the right direction.",
    "Deuteronomy 31:6 Verse: “Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.” Explanation: In moments of fear or challenge, we are reminded that God is always with us. His presence gives us the courage to face anything.",
    "Psalm 23:4 Verse: “Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.” Explanation: This verse reassures us that, even in life’s most difficult moments, God is there to guide and comfort us, so we need not fear.",
    "Isaiah 41:10 Verse: “So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.” Explanation: God promises to be our strength and support, assuring us that we are not alone in difficult times.",
    "2 Chronicles 15:7 Verse: “But as for you, be strong and do not give up, for your work will be rewarded.” Explanation: This verse encourages us to remain strong and persistent, knowing that our efforts and faith will be rewarded in due time.",
    "Exodus 14:14 Verse: “The Lord will fight for you; you need only to be still.” Explanation: In the face of struggles, we are reminded that God fights on our behalf, and we can find peace by trusting in His power.",
    "Zephaniah 3:17 Verse: “The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.” Explanation: God delights in us and is our Mighty Warrior. He takes joy in our well-being and offers love and protection.",
    "Philippians 4:13 Verse: “I can do all this through him who gives me strength.” Explanation: This verse reminds us that with Christ’s strength, we are capable of overcoming any challenge or obstacle.",
    "Romans 8:28 Verse: “And we know that in all things God works for the good of those who love him, who have been called according to his purpose.” Explanation: God works in every situation for the good of those who love Him, bringing hope even in challenging circumstances.",
    "Matthew 11:28-30 Verse: “Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.” Explanation: Jesus invites those who are tired or burdened to come to Him for rest. He promises comfort and peace in His presence.",
    "2 Corinthians 12:9 Verse: “But he said to me, ‘My grace is sufficient for you, for my power is made perfect in weakness.’ Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.” Explanation: God’s grace is enough for us, and in our weaknesses, His strength is most evident. This encourages us to embrace our challenges knowing that God empowers us.",
    "James 1:12 Verse: “Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.” Explanation: Perseverance through trials brings reward. This verse encourages endurance in faith, knowing that trials strengthen us for greater rewards.",
    "Romans 15:13 Verse: “May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.” Explanation: Trusting in God fills us with joy, peace, and hope, even in difficult times. The Holy Spirit empowers us to live with enduring hope.",
    "Ephesians 6:10 Verse: “Finally, be strong in the Lord and in his mighty power.” Explanation: We are called to find strength in God’s power, not our own, in facing the challenges of life.",
    "1 Peter 5:7 Verse: “Cast all your anxiety on him because he cares for you.” Explanation: God cares deeply for us, and we are encouraged to give Him our worries and trust that He will take care of us.",
    "Hebrews 10:23 Verse: “Let us hold unswervingly to the hope we profess, for he who promised is faithful.” Explanation: We are encouraged to remain firm in our faith and hope, trusting that God will fulfill His promises.",
    "Matthew 6:34 Verse: “Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.” Explanation: This verse encourages us to focus on the present, trusting that God will take care of the future, alleviating worry and anxiety.",
];
const hopes = [
    "This too shall pass., explanation No matter how tough things seem, remember that every difficult moment is temporary.",
    "Hope is the thing with feathers that perches in the soul. – Emily Dickinson, explanation Even in our darkest times, hope is always present, waiting to lift us up.",
    "Where there is hope, there is faith. Where there is faith, miracles happen. – Unknown, explanation: Hold on to hope, and believe that with faith, anything is possible." ,
    "The darkest hour has only 60 minutes. – Morris Mandel, explanation: Challenges and struggles may feel endless, but remember that light will always follow darkness." ,
    "God gives the nuts, but He does not crack them. – German Proverb, explanation: God provides the strength, but it’s up to us to keep going, knowing that He walks with us." ,
    "Out of difficulties grow miracles. – Jean de La Bruyère, explanation: Challenges can bring out the best in us and lead to miraculous outcomes if we stay hopeful." ,
    "You may be facing a storm, but storms don’t last forever. Hold on, your breakthrough is coming. – Unknown, explanation: Even in the midst of struggles, hold on to the belief that better days are ahead." ,
    "When you come out of the storm, you won’t be the same person who walked in. – Haruki Murakami, explanation: Life’s trials change us, but they also strengthen us, preparing us for better things ahead." ,
    "Faith is seeing light with your heart when all your eyes see is darkness. – Unknown, explanation: Keep your heart open to hope, even when the situation seems hopeless." ,
    "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose, for this thing we call ‘failure’ is not the falling down, but the staying down. – Mary Pickford, explanation: Every new moment is an opportunity for a fresh start, and nothing is beyond redemption." ,
    "You are never alone. God is always with you, guiding you through every step of life., explanation: No matter the circumstances, know that you are never abandoned—God is always beside you." ,
    "Sometimes the smallest step in the right direction ends up being the biggest step of your life. – Unknown, explanation: Even the smallest acts of courage and hope can lead to big changes." ,
    "Every day is a new beginning. Take a deep breath, smile, and start again., explanation: Each day brings a fresh opportunity to begin again and embrace new possibilities." ,
    "Don't let the past steal your present. – Cherralea Morgen, explanation: The past may be behind us, but the future is full of hope—don’t let old mistakes or hurts define you." ,
    "Hope is a powerful thing. It can keep you going through the toughest of times. – Unknown, explanation: Hope is more than just a feeling; it’s a source of strength that helps us push through adversity." ,
    "Every sunrise is a reminder that we have another chance to live a meaningful life., explanation: Every new day is a fresh opportunity to embrace hope and make the most of life." ,
    "When life knocks you down, you have two choices: Stay down or get up. – Unknown, explanation: It’s not about how hard you fall, but about the courage to rise again." ,
    "Keep going. Everything you need will come to you at the perfect time. – Unknown, explanation: Trust that your efforts will bear fruit in the right season." ,
    "No matter how long the night, the dawn will break. – African Proverb, explanation: No matter how dark or difficult things seem, a new day will come, bringing light and hope." ,
    "The only way to go is forward. – Unknown, explanation: No matter how tough the past has been, you can move forward toward brighter days." ,
    "When you feel like quitting, think about why you started. – Unknown, explanation: Remember the purpose behind your journey, and let it inspire you to keep going." ,
    "Every setback is a setup for a comeback. – T.D. Jakes, explanation: Challenges and failures are often stepping stones that lead to a greater victory." ,
    "God has a purpose for your life, and His plan for you is greater than you can imagine. – Unknown, explanation: Trust in God’s plan for your life, knowing that it’s full of purpose and hope." ,
    "Hope is the fuel of the soul, and without it, we cannot go forward. – Unknown, explanation: The fuel",
    "You must be the change you wish to see in the world. – Gabriel Garcia Marquez, explanation: Believe in yourself, and you will find the strength to change the world." ,
    "Believe you can and you're halfway there. – Mark Twain, explanation:Believe in your abilities, and you will find the motivation to keep going."
];

function App() {
  const [quote, setQuote] = useState("");
  const [testimony, setTestimony] = useState("");
  const [bibleVerse, setBibleVerse] = useState("");
  const [hope, setHope] = useState("");


  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const generateTestimony = () => {
    const randomIndex = Math.floor(Math.random() * testimonies.length);
    setTestimony(testimonies[randomIndex]);
  };

  const generateBibleVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    setBibleVerse(bibleVerses[randomIndex]);
  };
  const generateHope = () => {
    const randomIndex = Math.floor(Math.random() * hopes.length);
    setHope(hopes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>GROW WITH GOD BECAUSE HE IS THE LIGHT</h1>
      
      <div className="search-section">
        <div className="left-side">
          <h2>Quote Generator</h2>
          <p>{quote}</p>
          <button onClick={generateQuote}>Get a Quote</button>
        </div>

        <div className="right-side">
          <h2>Testimony Generator</h2>
          <p>{testimony}</p>
          <button onClick={generateTestimony}>Get a Testimony</button>
        </div>
      </div>

      <div className="search-section">
        <div className="left-side">
          <h2>Bible Verse Generator</h2>
          <p>{bibleVerse}</p>
          <button onClick={generateBibleVerse}>Get a Bible Verse</button>
        </div>
        
        <div className="right-side">
            <h2>Multiple words of hope</h2>
            <p>{hope}</p>
            <button onClick={generateHope}>Get Multiple hope</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
