import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:focus {
    opacity: .8;
    transform: scale(.9);
    border: 2px solid red !important;   
  }
  
  &:not(:first-child) {

    margin-left: 20px;
  }
`;