// Stories data structure
export interface Story {
  id: string;
  title: string;
  shortDescription: string;
  fullText: string;
}

export const stories: Story[] = [
  {
    id: '1',
    title: 'The Journey Begins',
    shortDescription: 'How I started my creative journey from a small village to building brands in Dubai.',
    fullText: `This is the full story of how I began my creative journey. It all started in a small village where I first discovered my passion for design and digital creativity.

Growing up, I was always fascinated by how brands communicate their stories. I spent countless hours learning Photoshop, watching tutorials, and experimenting with different design styles.

The turning point came when I moved to Dubai. The city's vibrant creative scene opened up new opportunities, and I began working with multiple brands, helping them tell their stories through digital media.

Today, I continue to push boundaries, combining strategic thinking with creative execution to help brands stand out in the digital landscape.`
  },
  {
    id: '2',
    title: 'Building Brands That Matter',
    shortDescription: 'The philosophy behind creating meaningful brand identities that resonate with audiences.',
    fullText: `Building a brand is more than just creating a logo or choosing colors. It's about understanding the core values, mission, and vision of a business, then translating that into a visual language that speaks to the right audience.

Over the years, I've worked with various brands, from startups to established companies. Each project taught me something new about the power of storytelling and visual communication.

The key is to listen carefully, understand the brand's unique voice, and create something that feels authentic and memorable. A great brand identity should feel inevitable - like it was always meant to be that way.`
  },
  {
    id: '3',
    title: 'The Power of Social Media',
    shortDescription: 'How strategic social media marketing can transform a business and connect with customers.',
    fullText: `Social media has revolutionized how businesses connect with their customers. But success isn't just about posting regularly - it's about understanding your audience, creating valuable content, and building genuine relationships.

I've helped numerous brands grow their social media presence by focusing on what truly matters: authentic storytelling, engaging visuals, and strategic content planning.

The platforms may change, but the fundamentals remain the same: know your audience, provide value, and be consistent. When done right, social media becomes a powerful tool for building community and driving business growth.`
  },
  {
    id: '4',
    title: 'From Concept to Reality',
    shortDescription: 'The process of turning creative ideas into tangible digital experiences that users love.',
    fullText: `Every great digital experience starts with an idea. But turning that idea into reality requires a careful balance of creativity, strategy, and technical execution.

My process begins with understanding the problem we're trying to solve. Then, I explore different creative directions, always keeping the user experience at the center of every decision.

From wireframes to final designs, from prototypes to live websites, each step is an opportunity to refine and improve. The goal is always the same: create something that not only looks great but also works beautifully for the people who will use it.`
  },
  {
    id: '5',
    title: 'Learning Never Stops',
    shortDescription: 'Why continuous learning and adaptation are essential in the fast-paced world of digital marketing.',
    fullText: `The digital landscape is constantly evolving. New platforms emerge, algorithms change, and user behaviors shift. To stay relevant, you must embrace continuous learning.

I've made it a habit to learn something new every day - whether it's a new design technique, a marketing strategy, or a technical skill. This commitment to growth has been crucial to my success.

But learning isn't just about consuming information. It's about experimenting, making mistakes, and applying what you've learned to real projects. That's where true growth happens.`
  },
  {
    id: '6',
    title: 'The Future of Digital',
    shortDescription: 'Thoughts on where digital marketing and design are heading in the coming years.',
    fullText: `As we look toward the future, several trends are shaping the digital landscape. AI is becoming more integrated into creative workflows, personalization is becoming more sophisticated, and user experience is more important than ever.

But despite all the technological advances, the fundamentals remain unchanged: understanding your audience, telling compelling stories, and creating meaningful connections.

The tools may evolve, but the principles of good design and effective marketing will always be relevant. The future belongs to those who can combine creativity with strategy, and who aren't afraid to adapt and learn.`
  }
];

export function getStoryById(id: string): Story | undefined {
  return stories.find(story => story.id === id);
}

export function getNextStoryId(currentId: string): string | null {
  const currentIndex = stories.findIndex(s => s.id === currentId);
  if (currentIndex === -1 || currentIndex === stories.length - 1) return null;
  return stories[currentIndex + 1].id;
}

export function getPreviousStoryId(currentId: string): string | null {
  const currentIndex = stories.findIndex(s => s.id === currentId);
  if (currentIndex <= 0) return null;
  return stories[currentIndex - 1].id;
}

