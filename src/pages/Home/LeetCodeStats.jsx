import Card from "../../components/Card";
import { leetcodeIcon } from "../../assets/asset";
import { useEffect } from "react";

export default function LeetCodeStats() {
  useEffect(() => {
    getLeetcodeStats();
  }, []);

  async function getLeetcodeStats() {
    const response = await fetch(
      "https://leetcode-stats-api.herokuapp.com/Shrook13",
      {
        method: "GET",
      },
    );
    const result = await response.json();
    updateLeetcodeStats(result);
  }

  function updateLeetcodeStats(result) {
    const documentObject = document.documentElement;
    const {
      easySolved,
      mediumSolved,
      hardSolved,
      totalEasy,
      totalMedium,
      totalHard,
    } = result;
    const easyPercentage = Math.round((easySolved / totalEasy) * 100);
    const mediumPercentage = Math.round((mediumSolved / totalMedium) * 100);
    const hardPercentage = Math.round((hardSolved / totalHard) * 100);

    documentObject.style.setProperty(
      "--leetcode-easy-progress",
      `${easyPercentage}%`,
    );
    documentObject.style.setProperty(
      "--leetcode-medium-progress",
      `${mediumPercentage}%`,
    );
    documentObject.style.setProperty(
      "--leetcode-hard-progress",
      `${hardPercentage}%`,
    );
  }
  return (
    <section className="w-full px-8">
      <Card className="flex flex-col items-center justify-center gap-5">
        <span className="flex items-center justify-start gap-4">
          <img src={leetcodeIcon} alt="Leetcode Icon" />
          <h3>Leetcode Stats</h3>
        </span>
        <div className="flex items-center justify-between gap-2">
          {/* Easy */}
          <span className="easy-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-white p-9"></span>
          </span>
          {/* Medium */}
          <span className="medium-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-(--color-card-primary) p-9"></span>
          </span>
          {/* Hard */}
          <span className="hard-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-(--color-card-primary) p-9"></span>
          </span>
        </div>
      </Card>
    </section>
  );
}

// {status: 'success', message: 'retrieved', totalSolved: 128, totalQuestions: 3586, easySolved: 45, …}
// acceptanceRate
// :
// 49.78
// contributionPoints
// :
// 235
// easySolved
// :
// 45
// hardSolved
// :
// 9
// mediumSolved
// :
// 74
// message
// :
// "retrieved"
// ranking
// :
// 976758
// reputation
// :
// 0
// status
// :
// "success"
// submissionCalendar
// :
// {1719100800: 8, 1719187200: 5, 1734480000: 11, 1734566400: 23, 1734652800: 11, 1734739200: 12, 1734825600: 2, 1734912000: 3, 1734998400: 9, 1735171200: 6, 1735257600: 1, 1735344000: 1, 1735430400: 3, 1735516800: 4, 1735603200: 2, 1735689600: 1, 1735776000: 4, 1735862400: 5, 1735948800: 2, 1736035200: 6, 1736121600: 1, 1736208000: 2, 1736294400: 2, 1736380800: 11, 1736553600: 8, 1736640000: 1, 1736726400: 1, 1736812800: 9, 1736899200: 6, 1736985600: 8, 1737072000: 8, 1737158400: 11, 1737244800: 16, 1737331200: 11, 1737417600: 5, 1737504000: 2, 1737590400: 1, 1737676800: 6, 1737763200: 1, 1737849600: 1, 1737936000: 3, 1738022400: 13, 1738108800: 2, 1738195200: 3, 1738281600: 3, 1738368000: 1, 1738540800: 2, 1738627200: 2, 1738800000: 1, 1738886400: 2, 1738972800: 1, 1739059200: 1, 1739145600: 8, 1739232000: 5, 1739318400: 5, 1739404800: 3, 1739491200: 3, 1739577600: 2, 1739750400: 2, 1739836800: 1, 1739923200: 1, 1740009600: 3, 1740096000: 1, 1740182400: 1, 1740355200: 2, 1740441600: 2, 1740528000: 1, 1740614400: 2, 1740700800: 2}
// totalEasy
// :
// 882
// totalHard
// :
// 843
// totalMedium
// :
// 1861
// totalQuestions
// :
// 3586
// totalSolved
// :
// 128
