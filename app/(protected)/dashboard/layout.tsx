import { getInsights } from "@/app/_actions";
import ConditionalWrapper from "@/components/ConditionalWrapper";
import { CircularProgressBar } from "@/components/ui/CircularProgressBar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, timeElapsed } = await getInsights();
  if (!data || timeElapsed === null || timeElapsed === undefined) {
    return (
      <div className="text-center text-2xl font-bold">No Insights Found</div>
    );
  }
  const totalTasks = Object.values(data).reduce((acc, item) => acc + item, 0);
  return (
    <main className="container relative mx-auto flex flex-col sm:flex-row min-h-0 p-3 gap-3 h-[calc(100dvh-64px)]">
      <ConditionalWrapper>
        <CircularProgressBar
          value={(data["COMPLETED"] / totalTasks) * 100}
          min={0}
          max={100}
          gaugePrimaryColor="#4ade80"
          gaugeSecondaryColor="#d1fae5"
          className="w-48 h-48"
        >
          <div className="flex flex-col items-center">
            <p className="text-[20px]">
              <span className="text-4xl">{data["COMPLETED"]}</span>/{totalTasks}
            </p>
            <span className="text-sm">Completed</span>
          </div>
        </CircularProgressBar>
        <div className="flex items-center justify-evenly w-full gap-5">
          <div className="flex flex-col items-center text-xl font-semibold">
            {data["PENDING"] || 0}
            <span className="text-base text-orange-600 !font-[500]">
              Pending
            </span>
          </div>
          <div className="flex flex-col items-center text-xl font-semibold">
            {data["IN_PROGRESS"] || 0}
            <span className="text-base text-yellow-600 !font-[500]">
              In Progress
            </span>
          </div>
        </div>
        <div className="w-full bg-white p-4 rounded-xl shadow-sm">
          <h4 className="text-lg font-semibold tracking-wide text-gray-800 mb-3">
            Today Time Spent
          </h4>
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-mono text-gray-900">
                {String(Math.floor(Number(timeElapsed) / 3600)).padStart(
                  2,
                  "0"
                )}
              </p>
              <p className="text-sm text-gray-500">hr</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-mono text-gray-900">
                {String(Math.floor((Number(timeElapsed) % 3600) / 60)).padStart(
                  2,
                  "0"
                )}
              </p>
              <p className="text-sm text-gray-500">min</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-mono text-gray-900">
                {String(Number(timeElapsed) % 60).padStart(2, "0")}
              </p>
              <p className="text-sm text-gray-500">sec</p>
            </div>
          </div>
        </div>
      </ConditionalWrapper>
      {children}
    </main>
  );
}
