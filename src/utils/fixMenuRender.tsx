import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { Link, To } from 'react-router-dom';

export const menuItemRender = (
  menuItemProps: { isUrl: any; path: To },
  defaultDom:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined,
) => {
  if (menuItemProps.isUrl) {
    // 如果是 URL 链接，则使用 Link 组件来包裹
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }
  // 否则，使用默认的渲染方式
  return defaultDom;
};
