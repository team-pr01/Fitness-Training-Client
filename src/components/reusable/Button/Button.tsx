type ButtonProps = {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({
  label,
  onClick,
  isLoading = false,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "group relative flex items-center justify-center py-3 px-5 font-medium rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer w-auto";

  const variantStyles = {
    primary:
      "bg-primary-10 text-neutral-20 hover:bg-blue-10/70 border border-primary-10",
    secondary:
      "bg-white text-neutral-20 hover:bg-blue-10/70 border border-neutral-60",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
