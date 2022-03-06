import React from 'react';

const SidebarMenu = React.forwardRef( (props, ref) => {
    return (
        <div ref={ref} className={`w-[300px] fixed top-0 left-0 shadow-md bg-[#9BB7D4] z-10 bottom-0 transition-all ${props.show ? "" : "-translate-x-full"}`}>
            
        </div>
    );
});

export default SidebarMenu;