import Header from "./components/Header.jsx";
import HeadingPost from "./components/HeadingPost.jsx";
import SectionOne from "./components/HomePage/SectionOne.jsx";
import SectionThree from "./components/HomePage/SectionThree.jsx";
import SectionTwo from "./components/HomePage/SectionTwo.jsx";
import Post from "./components/Post.jsx";

function Root() {
  const image =
    "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2024/07/PMP-HR-Sustainability-featured-image-800x780.png";
  const category = "Strategy & Operations";
  const title = "Mission Possible: HR’s Crucial Role In Sustainability";
  const author = "Carolyn Cox";
  const postLink = "#";
  const categoryLink = "#";

  return (
    <main className="h-[1000vh]">
      <Header />
      {/* Section 1 */}
      <SectionOne />

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 */}
      <SectionThree />
    </main>
  );
}

export default Root;
