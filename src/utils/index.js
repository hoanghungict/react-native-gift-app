import {Platform} from 'react-native';
import reduxAwait from './reduxAwait';

export function cleanProps(clean_key_props, props) {
    let newProps = {...props};
    clean_key_props.map(key => {
        delete newProps[key];
        return {}
    });
    return newProps;
}

/**
 * Combine style from props like: marginTop, left, right
 * @param propStyleKeys
 * @param props
 * @returns {{}}
 */
export function getStyleFromProps(propStyleKeys = [], props = {}){
    let style = {};
    propStyleKeys.map((propStyleKey) => {
        const propStyleValue = props[propStyleKey];
        if(propStyleValue !== undefined && propStyleValue !== null && propStyleValue !== false){
            style = {
                ...style,
                [propStyleKey]: propStyleValue
            }
        }
        return propStyleKey;
    });
    if(props.style){
        style = {
            ...style,
            ...props.style
        }
    }
    return style;
}

export function getPlatformValue(os, value, valueDefault){
    if(Platform.OS === os) return value;
    return valueDefault
}

export {reduxAwait};

export default {
    cleanProps,
    getStyleFromProps,
    getPlatformValue,
    reduxAwait
}