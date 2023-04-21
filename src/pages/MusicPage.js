import React from 'react'
import { Row, Col, Dropdown} from 'react-bootstrap';

import "../styles/musicPage.css"

const MusicPage = () => {
  return (
    <>
        <Row className="justify-content-md-center mt-2 mb-2">
            <h5 className="music-title">Promo Works</h5>
            <Dropdown.Divider style={{color: "grey", width: "70%", marginBottom: "1rem"}}/>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={1} lg={4} className="mt-3">
                <iframe width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/788953521&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Col>
        </Row>

        <Row className="justify-content-md-center mt-2 mb-2">
            <h5 className="music-title">Album Releases</h5>
            <Dropdown.Divider style={{color: "grey", width: "70%", marginBottom: "1rem"}}/>
        </Row>
        
        <Row className="justify-content-md-center">
            <Col className="col-auto mt-3">
                <iframe width="350" height="470" scrolling="no" frameborder="no" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=1666707890/size=large/bgcol=000000/linkcol=c92020/tracklist=false/transparent=true/" seamless><a href="https://achillesa.bandcamp.com/album/shiesuta">Shiesuta by Achilles A</a></iframe>            
            </Col>
            <Col className="col-auto mt-3">
                <iframe width="350" height="470" scrolling="no" frameborder="no" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=2372059621/size=large/bgcol=000000/linkcol=c92020/tracklist=false/transparent=true/" seamless><a href="https://achillesa.bandcamp.com/album/w-tebr-ga-i">Wítebróga I by Achilles A</a></iframe>            
            </Col>
            <Col className="col-auto mt-3">
                <iframe width="350" height="470" scrolling="no" frameborder="no" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=1956538881/size=large/bgcol=000000/linkcol=c92020/tracklist=false/transparent=true/" seamless><a href="https://achillesa.bandcamp.com/album/horror-thematics">Horror Thematics by Achilles A</a></iframe>
            </Col>
            <Col className="col-auto mt-3">
                <iframe width="350" height="470" scrolling="no" frameborder="no" allow="autoplay" src="https://bandcamp.com/EmbeddedPlayer/album=240271732/size=large/bgcol=000000/linkcol=c92020/tracklist=false/transparent=true/" seamless><a href="https://achillesa.bandcamp.com/album/fantasy-thematics">Fantasy Thematics by Achilles A</a></iframe>
            </Col>
        </Row>
    </>
  )
}

export default MusicPage