import React, { FC, useState } from 'react'

import HeaderNavComponent from '../../components/layout/HeaderNav';

const ToggleMobileHeaderNavMenu = (): [Boolean, () => void] => {
    const [open, change] = useState(false);

    const toggle = () => {
        change(!open);
        console.log('ok');
    }

    return [open, toggle];
};

const HeaderNavContainer: FC = () => {
    const [open, toggle] = ToggleMobileHeaderNavMenu();

    return <HeaderNavComponent open={open} toggle={toggle} />;
}

export default HeaderNavContainer;