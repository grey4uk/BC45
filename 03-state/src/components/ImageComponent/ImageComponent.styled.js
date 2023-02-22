import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 400px;
  border-radius: 4vh;
  border: ${({ outlined }) => {
    return outlined ? '4px dashed black' : '';
  }};
`;

export const PreviewImage = styled(Image)`
  width: 180px;
  border-radius: ${({ rad }) => rad};
`;
