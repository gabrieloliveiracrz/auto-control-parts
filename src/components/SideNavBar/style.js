import styled from "styled-components";

export const sideNavContainer = styled.div`
    &.open{
        display: flex;
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: center;
	    background-color: var(--dark);
	    width: 16rem;
	    max-width: 100vh;
	    position: relative;
	    color: var(--light);
	    border-right: 1px solid #fff;
	    transition: 0.4s;
    }
    
    &.closed{
        display: flex;
	    flex-direction: column;
	    align-items: center;
	    max-width: 3rem;
    }
`

export const NavUper = styled.div`
    display: flex;
	flex: 1;
`

export const NavHeading = styled.div`
    display: flex;
	justify-content: space-between;
	gap: 4rem;
	margin-top: 1rem;
`

export const NavBrand = styled.div`
    display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--light);
`

