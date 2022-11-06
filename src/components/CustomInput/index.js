import {useMemo, memo, useState, useCallback, useRef, useEffect} from "react";
import { Controller } from 'react-hook-form';

const CustomInput = ({type = 'text', placeholder, required, name, control}) => {



    // const foo = () => console.log(3)
    //
    // foo()

    // const data = useMemo(() => Math.random(), [])
    //
    // const foo = useCallback(() => 7, [])
    // memoize
    return (
        <Controller
            name={name}
            control={control}
            rules={{required}}
            render={({field, formState: { errors}}) => {
                console.log('errors', errors)
                return (
                    <div>
                        <input
                            type={type}
                            style={errors[name]
                                ? {borderColor: 'red'}
                                : {borderColor: 'black'}
                            }
                            placeholder={placeholder}
                            {...field}
                        />
                        {errors[name] && <div>{errors[name].type}</div>}
                    </div>
                )
            }}
        />
    )
}

// const CustomInput = ({initialValue = '', type = 'text', placeholder, required}) => {
//     const ref = useRef(null)
//
//     const [error, setError] = useState('')
//     const [value, setValue] = useState(initialValue)
//     // const [isDirty, setIsDirty] = useState(false)
//     const [isValid, setIsValid] = useState(true)
//
//     // useEffect(() => {
//     //     ref.current.onfocus = function () {
//     //         setIsDirty(true)
//     //     }
//     // }, [])
//
//     useEffect(() => {
//         ref.current.onblur = function () {
//             if (!value && required) {
//                 setIsValid(false)
//                 setError('fill this field')
//             }
//         }
//         if (value && required) {
//             setIsValid(true)
//             setError('')
//         }
//
//     }, [value, required])
//
//     // const data = useMemo(() => Math.random(), [])
//     //
//     // const foo = useCallback(() => 7, [])
//     // memoize
//     return (
//         <div>
//             <input
//                 ref={ref}
//                 type={type}
//                 value={value}
//                 style={!isValid
//                     ? {borderColor: 'red'}
//                     : {borderColor: 'black'}
//                 }
//                 placeholder={placeholder}
//                 onChange={e => setValue(e.target.value)}
//                 required={required}
//             />
//             {error && <div>{error}</div>}
//         </div>
//     )
// }

export default memo(CustomInput)
