import { Container, Typography, Grid, Box } from '@mui/material';
import Header from '../Components/Header';
import '../Styles/Letter.css';
import MusicPlayer from '../Components/MusicPlayer';
import doraemonNoUta from '../Assets/doraemon-no-uta.ogg';
import yumeWoKanaete from '../Assets/yumewokanaete.ogg';
import himawariNoYakusoku from '../Assets/himawari-no-yakusoku.ogg';
import niji from '../Assets/niji.ogg';

const tracks = [
  {
    title: 'ドラえもんのうた',
    artist: 'Riyandi Kusuma',
    audioSrc: doraemonNoUta,
  },
  {
    title: '夢をかなえて',
    artist: 'Iso Piano',
    audioSrc: yumeWoKanaete,
  },
  {
    title: 'ひまわりの約束',
    artist: 'Oishiteru!',
    audioSrc: himawariNoYakusoku,
  },
  {
    title: '虹 -菅生 大将',
    artist: 'Karu-Piano',
    audioSrc: niji,
  },
];

function LetterToLongHa() {
  return (
    <>
      <Header typo='ドラえもんからのてがみ？' />

      <div>
        <MusicPlayer tracks={tracks} />
      </div>

      <Container maxWidth='md' sx={{ marginTop: '30px' }}>
        <Box>
          <Grid container rowSpacing={{ xs: 0.5, md: 3 }}>
            <Grid item xs={12}>
              <h2 className='letterTitle'>⋆⸜ 25歳の誕生日おめでとう⑅*⸝⋆</h2>
            </Grid>
            <Grid item xs={12}>
              <p className='content'>
                Happy Birthday anh Long Hà ạaa!! <br />
                <br />
                Nghe khách sáo thiệc sự =)) Chúc mừng sinh nhật anh nhe! Chắc
                anh cũng khum ngờ có quà sinh nhật mà chấm hỏi vầy, thích khum
                anh? =)). Em để cái chong chóng tre đó cho anh chơi gòi quay nó
                vòng vòng đó! Cám ơn em đi :v. Tuổi mới bé Nguyn chúc anh bớt xì
                trét hơn nè, iu thương bé nhiều hơn, balance được cuộc sống ạ!
                <br />
                Gomen anh, em bị rush nên không làm được nhiều thứ như (em) mong
                đợi (huhu), em còn tính làm Dora-chan nhảy nhảy ở phía trang
                trước thay cho cái chong chóng tre cơ, mà Blender sập liên tục
                nên thôi chịu :v. Và Dora-chan em vẽ mấy ngày nay là bé
                supposedly lên trang chủ đó :v... Nhưng thôi để mốt update sau
                ạ. <br />
                Trước anh nói muốn có sinh nhật theo theme Om Nom, nên bé quyết
                định năm nay sinh nhật anh làm theo theme Doraemon ạ :V... (liên
                quan?) với cả bữa giờ mình cũng coi nhiều Doraemon nên là một
                chút xíu Doraemon cũng vui mà ha :D. <br />
                Cám ơn anh lúc nào cũng bên bé, lúc nào cũng cổ vũ bé cố gắng
                hết sức ạ! Nhờ anh mà bé dần lớn khỏe, khum bị phụ thuộc quá
                nhiều vào người khác, đặc biệt là gia đình. Lâu lâu em thấy cũng
                thương anh, một phần là tự dưng dính vô tui, một đứa dở dở ương
                ương, rồi còn nhà tui cũng baka nữa huhu, nên gặp toàn chuyện gì
                đâu không luôn =((. Nhưng mà somehow ở bên anh bé bớt lo nghĩ
                hơn, tập trung vào phát triển bản thân hơn. 本当にありがとう！Bé
                thương anh lắm á :'(!!
                <br />
                Gomen ne, lâu lâu tui 迷惑かけた, toàn dỗi những chuyện không
                đâu huhu. Nhưng một cái tui luôn nhớ là anh cũng thương tui
                nhiều, nên tự dưng hết dỗi :v. Để ráng mốt ít dỗi anh lại :vvv
                anh đợi đi, tầm mấy chục năm nữa em sẽ hết dỗi anh cho coi ;)
                Yên tâm :)))))! Với cả anh dựa vào bé cũng được nè, khi nào mệt
                quá thì về với em, em thương nha. Đừng cố quá thành quá cố nha!
                Bé xót đó huhu :(!
                <br />
                Mốt em rảnh rảnh em sẽ update page nên lâu lâu nhớ check page
                nhe :D, ví dụ như add thêm nhạc vào hay upgrade pages idk, tại
                page này em cũng làm hơi vội, cũng không có nhiều thời gian làm
                nên là gomen anh nhiều :(.
                <br />
                Thui đọc xong rùi thì quay ra ôm tui một cái nhaaaaaa. Thương
                anh nhiều lắm luônnnnnn. <br />
                あんたとずっと一生にいて望みます！愛してます。 Với cả chúc năm
                tuổi 25 vui vẻ nhaaaaa! <br />
                <br />
                好きだよ！
                <br /> Bé Nguyn
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default LetterToLongHa;
