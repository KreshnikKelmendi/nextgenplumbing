import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function MyAccordion() {
  return (
    <Container >
      <Accordion defaultActiveKey="0" flush style={{ backgroundColor: '#ff0000' }}>
        <Accordion.Item eventKey="0" style={{ backgroundColor: '#000e5d', color: 'white', border: '1px solid #ddd' }}>
          <Accordion.Header style={{ backgroundColor: '#000e5d', color: 'white' }}>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ backgroundColor: '#ffffff', border: 'none' }}>
          <Accordion.Header style={{ backgroundColor: '#007bff', color: 'white' }}>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default MyAccordion;
