import { useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { useDispatch } from "react-redux";
import { selectVisiblePositions } from "store/positions/position-selectors";
import { addFilter } from "store/filters/filter-action";
import { filterSelector } from "store/filters/filter-selector";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(filterSelector);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};

export { JobList };
