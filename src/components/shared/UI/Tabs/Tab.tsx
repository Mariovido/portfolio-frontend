import { useState } from 'react';
import { TabProps } from '../../../../models/interfaces/shared/UI/Tabs/TabProps';

import './styles/Tab.scss';

function Tab(props: TabProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { className, tabs } = props;

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveTab(index);
    }
  };

  tabs.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <div className="tab-container">
      <div className={`${className} tab-header `}>
        {tabs.map((tab) => (
          <div
            key={tab.order}
            className={`tab ${activeTab === tab.order ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.order)}
            role="tab"
            tabIndex={activeTab === tab.order ? 0 : -1}
            onKeyDown={(event) => handleKeyDown(event, tab.order)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tab;
