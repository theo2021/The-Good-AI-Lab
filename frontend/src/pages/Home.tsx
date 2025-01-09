import Intro from '../components/home/Intro';
import CallToAction from '../components/home/CallToAction';
import Approach from '../components/manifesto/Approach';
// import NewsFeed from '../components/home/NewsFeed';

export default function Home() {
  return (
    <>
      <Intro />
      <Approach />
      {/* <NewsFeed /> */}
      <CallToAction />
    </>
  );
}
