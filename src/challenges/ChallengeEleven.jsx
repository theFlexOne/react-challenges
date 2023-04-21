import { useEffect, useState } from "react";

// https://reactchallenges.live/challenge/11

const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setBottom(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return bottom || null;
};

const ChallengeEleven = () => {
  const bottom = usePageBottom();

  useEffect(() => {
    if (bottom) {
      alert("You have reached the bottom of the page!");
    }
  }, [bottom]);

  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li className="text-3xl font-bold">1</li>
        <li className="text-3xl font-bold">2</li>
        <li className="text-3xl font-bold">3</li>
        <li className="text-3xl font-bold">4</li>
        <li className="text-3xl font-bold">5</li>
        <li className="text-3xl font-bold">6</li>
        <li className="text-3xl font-bold">7</li>
        <li className="text-3xl font-bold">8</li>
        <li className="text-3xl font-bold">9</li>
        <li className="text-3xl font-bold">10</li>
        <li className="text-3xl font-bold">11</li>
        <li className="text-3xl font-bold">12</li>
        <li className="text-3xl font-bold">13</li>
        <li className="text-3xl font-bold">14</li>
        <li className="text-3xl font-bold">15</li>
        <li className="text-3xl font-bold">16</li>
        <li className="text-3xl font-bold">17</li>
        <li className="text-3xl font-bold">18</li>
        <li className="text-3xl font-bold">19</li>
        <li className="text-3xl font-bold">20</li>
        <li className="text-3xl font-bold">21</li>
        <li className="text-3xl font-bold">22</li>
        <li className="text-3xl font-bold">23</li>
        <li className="text-3xl font-bold">24</li>
        <li className="text-3xl font-bold">25</li>
      </ul>
    </div>
  );
};

export default ChallengeEleven;
