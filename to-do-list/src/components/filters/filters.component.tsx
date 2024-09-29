import './filters.component.scss';
import { DefaultInput } from "../ui/default-input/default-input.component";

export const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filters__search">
        <DefaultInput type="search" placeholder="Search" />
      </div>

      <div className="filters__date">
        <DefaultInput type="date" placeholder="From" />
        <DefaultInput type="date" placeholder="To" />
      </div>
    </div>
  );
};
