import { IButton } from "../../../interfaces/button.interface";
import "./button.component.scss";
import plusIcon from "../../../assets/icons/plus-icon.png";

export const Button: React.FC<IButton> = ({ type, onClick }: IButton) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {(type === "sm" || type === "lg") && (
        <img className={`btn__icon--${type}`} src={plusIcon} alt="plus" />
      )}
      {type === 'sm' && <p className={`btn__text--${type}`}>New task</p>}
      {type === 'lg' && <p className={`btn__text--${type}`}>Add new</p>}
      {type === 'update' && <p className={`btn__text--${type}`}>Update task</p>}
      {type === 'cancel' && <p className={`btn__text--${type}`}>Cancel task</p>}
      {type === 'create' && <p className={`btn__text--${type}`}>Create task</p>}
    </button>
  );
};
