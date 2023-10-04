import React from 'react';
import * as s from './style'; // Importe seus estilos ou componentes necessários

const Sidebar = ({ activePage, handlePageClick }) => {
    return (
        <s.Sidebar>
            <s.Content>
                <s.SidebarItem onClick={() => handlePageClick('Control')} className={activePage === 'Control' ? 'visited' : ''}>
                    Controle de Peças
                </s.SidebarItem>
                <s.SidebarItem onClick={() => handlePageClick('Dashboard')} className={activePage === 'Dashboard' ? 'visited' : ''}>
                    Dashboard de Peças
                </s.SidebarItem>
                <s.SidebarItem onClick={() => handlePageClick('Admin')} className={activePage === 'Admin' ? 'visited' : ''}>
                    Painel de Admin
                </s.SidebarItem>
            </s.Content>
        </s.Sidebar>
    );
};

export default Sidebar;
