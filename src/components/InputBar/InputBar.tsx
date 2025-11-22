import Eye from '../../assets/icons/eye-icon.png'
import EditData from '../../assets/icons/edit-data.png'

type InputProps = {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  showEyeIcon?: boolean;
  editDataIcon?: boolean;
};

function InputBar({
  placeholder,
  className,
  type = 'text',
  value,
  onChange,
  name,
  id,
  disabled,
  showEyeIcon = false,
  editDataIcon = false,
}: InputProps) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
      />
      {showEyeIcon && (
        <img src={Eye} alt="Mostrar/esconder senha" className="eye-icon" />
      )}
      {editDataIcon && (
        <img src={EditData} alt="Editar dados" className="edit-data" />
      )}
    </div>
  );
}

export default InputBar;
