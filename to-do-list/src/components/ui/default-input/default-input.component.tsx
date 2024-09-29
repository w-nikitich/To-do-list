import './default-input.component.scss';
import searchIcon from '../../../assets/icons/search-icon.png';
import calendarIcon from '../../../assets/icons/calendar-icon.png';
import { IInput } from '../../../interfaces/input.interface';

export const DefaultInput: React.FC<IInput> = ({type, placeholder}: IInput) => {
    return (
        <div className="input">
            <input className='input__field' placeholder={placeholder}/>
            {(type === 'search') ? <img className="input__icon" src={searchIcon} alt='scope'/> : <img className="input__icon" src={calendarIcon} alt='calendar'/>}
        </div>
    )
}