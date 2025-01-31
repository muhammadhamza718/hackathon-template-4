interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProductTabs({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-16 mb-10 px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-base flex md:text-lg font-josefin transition-colors duration-200 pb-1 ${
              activeTab === tab
                ? "text-[#FB2E86] border-b-2 border-[#FB2E86]"
                : "text-[#151875] hover:text-[#FB2E86]"
            }`}
            onClick={() => onTabChange(tab)}
          >
            <div className="relative flex justify-end items-center gap-4">{tab} <div key={tab} className={`${
              activeTab === tab
                ? "flex w-2 h-2 rounded-full bg-[#FB2E86]"
                : "text-[#151875] hover:text-[#FB2E86]"
            }`}></div></div>
          </button>
        ))}
      </div>
    </>
  );
}
