import React, { useState } from "react";
import "./SideNavBar.css";
import { Clipboard, Gear, List, Monitor, SignOut, User, UserPlus } from '@phosphor-icons/react';
import styled from 'styled-components';

const SideNavBar = ({ activePage, MessageLogout }) => {
	const [isExpanded, setExpendState] = useState(false);

	const handleItemClick = (pageName) => {
		activePage(pageName);
	};

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<Clipboard className="menu-item-icon" size={32} color="#FFF" weight="bold" />
							<h4>Projeto Final</h4>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<List size={32} color="#FFF" weight="bold" />
					</button>
				</div>
				<div className="nav-menu">
					<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} onClick={() => handleItemClick('Control')}>
						<Gear className="menu-item-icon" size={32} color="#FFF" weight="bold" />
						{isExpanded && <p>Controle de Peças</p>}
					</a>
					<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} onClick={() => handleItemClick('Dashboard')}>
						<Monitor className="menu-item-icon" size={32} color="#FFF" weight="bold" />
						{isExpanded && <p>Dashboard</p>}
					</a>
					<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} onClick={() => handleItemClick('Admin')}>
						<UserPlus className="menu-item-icon" size={32} color="#FFF" weight="bold" />
						{isExpanded && <p>Painel Admin</p>}
					</a>
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<User className="nav-footer-avatar" size={32} color="#FFF" weight="bold" />
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Usuário</p>
							<p className="nav-footer-user-position">Cargo</p>
						</div>
					</div>
				)}
				<SignOut className="logout-icon" size={32} color="#FFF" weight="bold" onClick={MessageLogout} />
			</div>
		</div>
	);
};

export default SideNavBar;
