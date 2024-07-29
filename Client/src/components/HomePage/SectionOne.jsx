import React from "react";
import HeadingPost from "../HeadingPost.jsx";
import Post from "../Post.jsx";

const fetchedPosts = [
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/07/PMP-HR-Sustainability-featured-image-800x780.png",
    title: "Mission Possible: HR’s Crucial Role In Sustainability",
    description: "",
    link: "#",
    category: {
      title: "Strategy & Operations",
      link: "#",
    },
    author: "Carolyn Cox",
    type: "today-choice",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/07/PMP-HR-Sustainability-featured-image-800x780.png",
    title: "Mission Possible: HR’s Crucial Role In Sustainability",
    description: "",
    link: "#",
    category: {
      title: "Strategy & Operations",
      link: "#",
    },
    author: "Carolyn Cox",
    type: "today-choice",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/06/PMP-office-collaboration-featured-image-270x270.png",
    title: "The Driving Force Behind RTO is a Quest for Collaboration",
    description: "",
    link: "#",
    category: {
      title: "Articles",
      link: "#",
    },
    author: "Gleb Tsipursky",
    type: "post",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/06/PMP-Keyword-skills-based-learning-Jason-Herring-featured-image-270x270.jpg",
    title: "The Emergence of Skills-Based Learning is Vital to Teams’ Success",
    description: "",
    link: "#",
    category: {
      title: "Articles",
      link: "#",
    },
    author: "Jason Herring",
    type: "post",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/05/PMP-payroll-software-market-size-featured-image-copy-270x270.png",
    title: "Set for Growth: The Ins and Outs of the HR Payroll Software Market",
    description: "",
    link: "#",
    category: {
      title: "Pay Roll And Finance",
      link: "#",
    },
    author: "David Rice",
    type: "post",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/05/PMP-flexible-work-and-mental-health-featured-image-270x270.png",
    title: "The Real Impact of Flexible Work on Mental Health",
    description: "",
    link: "#",
    category: {
      title: "Articles",
      link: "#",
    },
    author: "Gleb Tsipursky",
    type: "post",
  },
  {
    image:
      "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/05/PMP-flexible-work-and-mental-health-featured-image-270x270.png",
    title: "There’s A Problem With Your Employee Wellness Program. Here’s How To Fix It",
    description: "",
    link: "#",
    category: {
      title: "Wellness & Wellbeing",
      link: "#",
    },
    author: "David Rice",
    type: "post",
  },
];

const todayChoicePosts = [];

const posts = [];

fetchedPosts.find((post) => {
  if (post.type === "today-choice") {
    todayChoicePosts.push(post);
  } else {
    posts.push(post);
  }
});

console.log(todayChoicePosts[0]);
console.log(posts);

const SectionOne = () => {
  return (
    <section
      className="mt-[100px] w-full h-auto px-10 flex flex-col gap-y-5 lg:flex-row lg:gap-x-5"
      id="section_1"
    >
      {/* Heading Post */}
      <HeadingPost
        image={todayChoicePosts[0].image}
        ctTitle={todayChoicePosts[0].category.title}
        title={todayChoicePosts[0].title}
        author={todayChoicePosts[0].author}
        link={todayChoicePosts[0].link}
        ctLink={todayChoicePosts[0].category.link}
      />
      {/* Card Posts */}
      {
        <div
          className="w-full flex flex-col lg:max-w-[50%] lg:gap-y-4"
          id="posts"
        >
          {posts.map((post, index) => (
            <Post
              key={index}
              image={post.image}
              ctTitle={post.category.title}
              title={post.title}
              author={post.author}
              link={post.link}
              ctLink={post.category.link}
            />
          ))}
        </div>
      }
    </section>
  );
};

export default SectionOne;
