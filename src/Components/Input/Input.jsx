import { useState } from 'react';

const Input = ({
    id,
    label,
    type,
    autoFocus,
    handleChange,
    value,
    isvalid,
    errorMessage,
    ...rest
}) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => setFocused(true);

    return (
        <div className='mb-10'>
            <label htmlFor={id} className='mb-3 font-semibold'>
                {label}
            </label>
            <input
                {...rest}
                type={type}
                id={id}
                name={id}
                focused={focused.toString()}
                isvalid={isvalid}
                onBlur={handleFocus}
                onFocus={()=>id==="passwordConfirm" && setFocused(true)}
                autoFocus={autoFocus}
                value={value}
                autoComplete='off'
                onChange={handleChange}
                className='w-full rounded-[4px] border-none bg-grey p-4 outline-none focus:border-b-4 focus:border-solid focus:border-lightGreen invalid:focus:border-red-600'
            />
            <span className='mt-2 hidden text-red-600'>{errorMessage}</span>
        </div>
    );
};

export default Input;
