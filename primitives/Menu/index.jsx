import React, { useContext } from 'react';
import { styled } from '../../css';

const Context = React.createContext(false);

export const Menu = styled((props) => <styled.Box {...props} data-component-menu />);

const MenuItem = styled((props) => (
  <styled.Box
    {...props}
    onClick={() => alert('primitive functionality')}
    as={props.as || 'button'}
    data-component-menu-item
  >
    <Context.Provider value={props.selected}>{props.children}</Context.Provider>
  </styled.Box>
));

const MenuIcon = styled((props) => {
  const checked = useContext(Context);
  return (
    <styled.Box
      {...props}
      as={props.as || 'svg'}
      data-component-menu-icon
      style={{
        visibility: checked ? 'visible' : 'hidden',
        display: 'inline-block',
        ...props.style,
      }}
    />
  );
});

Menu.Item = MenuItem;
Menu.Icon = MenuIcon;
