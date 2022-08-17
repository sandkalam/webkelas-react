import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Carousel, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Typed from 'typed.js';
import {useEffect, useRef} from "react";
import Countdown from "react-countdown";


function App() {
    return (
        <div>
            <Notification/>
            <TopNavbar/>
            <CarouImage/>
            <TypedText/>
            <ClassesCard/>
            <WavesDown/>
            <Division/>
            <WavesUp/>
        </div>
    );
}

//Notification is a component that is used to display a notification
function Notification() {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return <span>Merdeka!</span>;
        } else {
            return <span>{days} hari {hours} jam {minutes} menit {seconds} detik</span>;
        }
    }
    return (
        <div className="bg-black text-white p-3 text-center" role="alert">
            <Container>
                <strong>Independence Day is coming up! <span style={{color: "red"}}>MERDEKA</span> INDONESIA!</strong>
                {/*    create display countdown time to 17 August 2022 10:00:00*/}
                <h4>
                    <strong className="text-white text-center">
                        <Countdown date={new Date("2022-08-17T10:00:00")} renderer={renderer}/>
                    </strong></h4>

            </Container>
        </div>
    );
}

//TopNavbar is a component that is used to display the navigation bar
function TopNavbar() {
    const menuItems = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "Users",
            link: "#users"
        },
        {
            name: "Gallery",
            link: "#gallery"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Projects",
            link: "#projects"
        }

    ];
    const brandLogo = "vite.svg";

    return (
        <Navbar bg="dark" variant="dark" expand={"lg"}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={"../src/assets/svg/" + brandLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}
                    MM2 Re: Creation
                </Navbar.Brand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        {menuItems.map((item, key) => (
                            <Nav.Link key={key} href={item.link}>{item.name}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

//CarouImage is a Component for display Master images in top
function CarouImage() {
    let imglist = [
        {
            "name": "Together",
            "url": "https://images.unsplash.com/photo-1659731650022-d9aad2412098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
        },
        {
            "name": "Nature is Beautiful",
            "url": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
        },
        {
            "name": "Stay Home",
            "url": "https://images.unsplash.com/photo-1546414809-22c82b5e2ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]

    return (
        <Carousel fade={true} indicators={false}>
            {imglist.map((item, key) => (
                <Carousel.Item itemID={key} key={key}>
                    <img
                        style={{"maxHeight": "70vh", "maxWidth": "100vw", "objectFit": "cover"}}
                        className="d-block w-100 img-fluid"
                        src={item.url}
                        alt={item.name}
                    />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

//TypedText is a component for display animation typing text
function TypedText() {

    const el = useRef(null);
    const textList = [
        "Nature is Beauty",
        "Nature is Wonderful",
        "Stay at Home"
    ]

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: textList,
            startDelay: 500,
            typeSpeed: 80,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="text-center text-white bg-dark p-3">
            {/* Element to display typing strings */}
            <span ref={el}></span>
        </div>
    );
}

//Classes Card is a component for display card of classes
function ClassesCard() {
    let classes = [
        {
            "name": "Incredible",
            "message": "Join us for a fun and exciting adventure! If being young means persisting in ambition,an event of gratification,venturing in fearless projects,taking risks",
            "img": "class1.svg"
        },
        {
            "name": "Talented",
            "message": "Dreams are free. Goals have a cost. While you can daydream for free, goals don't come without a price. Time, Effort, Sacrifice, and Sweat. How will you pay for your goals?",
            "img": "class2.svg"
        },
        {
            "name": "Inspiring",
            "message": "Create a life that feels good on the inside, not just one that looks charming from the outside and the best people are people who have good character and are useful to others",
            "img": "class3.svg"
        },
    ]
    return (
        <div style={{background: "#e2e2e2"}}>
            <Container className="py-3">
                <Row>
                    {classes.map((item, key) => (
                        <Col md={4} className="mb-3" key={key}>
                            <Card className="text-center p-3 h-100 shadow-sm" key={key}>
                                <Card.Img draggable={false} variant="top" src={`../src/assets/svg/${item.img}`}
                                          className="h-100"/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.message}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

//add waves
function WavesDown() {
    return (
        <div className="waves-down">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e2e2" fillOpacity="1"
                      d="M0,192L18.5,176C36.9,160,74,128,111,144C147.7,160,185,224,222,218.7C258.5,213,295,139,332,90.7C369.2,43,406,21,443,26.7C480,32,517,64,554,85.3C590.8,107,628,117,665,106.7C701.5,96,738,64,775,90.7C812.3,117,849,203,886,234.7C923.1,267,960,245,997,240C1033.8,235,1071,245,1108,224C1144.6,203,1182,149,1218,160C1255.4,171,1292,245,1329,272C1366.2,299,1403,277,1422,266.7L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
            </svg>
        </div>
    )
}

//add waves
function WavesUp() {
    return (
        <div className="waves-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#e2e2e2" fillOpacity="1"
                      d="M0,192L18.5,176C36.9,160,74,128,111,144C148.7,160,187,192,224,181.3C261.5,171,299,139,336,117.3C373.2,96,411,85,448,101.3C485.1,117,523,171,560,181.3C597.9,192,635,160,672,144C709.8,128,747,128,784,144C821.7,160,859,192,896,192C933.5,192,971,160,1008,144C1045.3,128,1083,128,1119,144C1156.2,160,1194,192,1231,192C1268.1,192,1306,160,1343,144L1440,128L1440,320L1343.5,320C1306.9,320,1269,320,1231,320C1194.3,320,1157,320,1119,320C1081.5,320,1044,320,1007,320C960,320,923,320,886,320C848.2,320,811,320,774,320C737.5,320,700,320,663,320C625.7,320,588,320,551,320C513.9,320,477,320,440,320C403.2,320,366,320,329,320C291.4,320,254,320,217,320C179.6,320,142,320,105,320C67.8,320,30,320,3,320L0,320Z"></path>
            </svg>
        </div>
    )
}

//Division is a component for display division of classes
function Division() {
    const users = [
        {"name": "John Doe", "img": "src/assets/svg/vite.svg", "divnumber": 1},
        {"name": "Jane Doe", "img": "src/assets/svg/vite.svg", "divnumber": 2},
        {"name": "Jack Doe", "img": "src/assets/svg/vite.svg", "divnumber": 3},
        {"name": "Jill Doe", "img": "src/assets/svg/vite.svg", "divnumber": 4},
        {"name": "Joe Doe", "img": "src/assets/svg/vite.svg", "divnumber": 1},
        {"name": "Jenny Doe", "img": "src/assets/svg/vite.svg", "divnumber": 2},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 2},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 2},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 4},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 1},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 3},
        {"name": "Joker Doe", "img": "src/assets/svg/vite.svg", "divnumber": 2},
    ]
    const divnumbers = [
        {
            "id": 1,
            "name": "Division 1",
            "img": "src/assets/svg/class1.svg",
            "message": "This division is for those who are looking for a new challenge and want to start a new journey."
        },
        {
            "id": 2,
            "name": "Division 2",
            "img": "src/assets/svg/class2.svg",
            "message": "This division is for those who are looking for a new challenge and want to start a new journey."
        },
        {
            "id": 3,
            "name": "Division 3",
            "img": "src/assets/svg/class3.svg",
            "message": "This division is for those who are looking for a new challenge and want to start a new journey."
        },
        {
            "id": 4,
            "name": "Division 4",
            "img": "src/assets/svg/class4.svg",
            "message": "This division is for those who are looking for a new challenge and want to start a new journey."
        }
    ]


    return (
        <div className="division">
            <div className="division-content mb-5 p-3">
                <h1 className="text-center">Division</h1>
                <div className="text-center">
                    <p>We have divided our classes into several divisions.</p>
                </div>
            </div>
            {divnumbers.map((divnumber, index) => {
                    return (
                        <Container className="division-item text-center my-3 p-2" key={index}>
                            <div className="division-title my-3 p-2">
                                <h3>{divnumber.id}</h3>
                                <p>{divnumber.name}</p>
                            </div>

                            <Container fluid className="division-item-content">
                                <Row>
                                    <Col md={6}>
                                        <Image src={divnumber.img} className="" alt="class" fluid/>
                                    </Col>
                                    <Col key={index} md="6" className="mb-3">
                                        <div className="division-item-content-user py-3 ">
                                    {users.map((user, index) => {
                                        if (user.divnumber === divnumber.id) {
                                            return (
                                                        <Image src={user.img} className="division-item-content-user-img mx-3" width={90} key={index} roundedCircle alt="user" fluid/>
                                            )}})
                                    }
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    )
                }
            )}
        </div>
    )
}


export default App;