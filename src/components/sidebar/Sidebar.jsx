import styled from "styled-components";

const Sidebar = () => {
  return (
    <SideNavigationWrapper>
      <h1>duration : 02:00:00 </h1>
    </SideNavigationWrapper>
  )
}

export default Sidebar;

const SideNavigationWrapper = styled.div`
  display: none;
`;