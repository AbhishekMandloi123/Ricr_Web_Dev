function start() {
  console.log("Game started");
  document.getElementById("rolldice1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}
function Restart() {
  window.location.reload();
}
function p1Play() {
  console.log("Player1Playing");
  let Score = Number(document.getElementById("pls1").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  switch (DF) {
    case 1:
      {
      document.getElementById("p1dice").src =
        "data:image/webp;base64,UklGRnoFAABXRUJQVlA4IG4FAAAQKwCdASoBAQEBPp1OoEwlpKMiJpVoMLATiWVu4W1R2rB7GSIHx36Qf57oD+be9nPJWbzq/Et6ZHmT/YD1ZukA/s39r64/0APLe9nzyVdVphNle/JfMnSvzRfH1RGeu79gBmWi8nReTovJ0Xk6LydErCXJrE2ri64f1LLq/D3nG3Gyy1eHy4633Q50mBFWdN4IqlR73SlzNAl1BSGB2LSoBnDX1wbZemn8VYIJeW+sNQQ+oIdMQnykFt/AFZ1o3dMpqa3ZsSHqglvTWw0yprImaacbkGZ3X+BGTvuR48NW3XmVLungnu/xPySBeLqMrVNeVPjZayleKQv2ZDTWw1AQ8G78c9z6G77kbBMdw4Dtl6b0k5IFoiDpVIMF7IUV2fUEPjwAZd6yfWXXipT2Rh71pvifpvLhf7D5iOudzXodxsJRg6NKoM8nMwj75fr+KCH1BD6gh9QQ+oIfUEPqCH1AAAD+/iIgAE9YR2jWQ78F7BFQDWIX9F87uNGq8rz5s8CaG4cKvs7RMf6yWuGkHcHfgDFW2wMfG8Skl5QYfdJnlp0i7HaMtbtWl0bmHtzLMwLZUV8altNXZb1i8Pz91dWCrJPlcVNt+EvG44pozeOMS2oQabxG1WgHgAuXu7ud8+1mPVqxNaKj5cLwKUSclSr6Rl17JDXAtHlyu0vgWxfBC1aTO/346NTi4hu3h80mss4HhrBmii05/Hbe2MmSMwalOEdv+vTKyTvQAGEtBfv9gsvyMdMJA9FThmchLrIq/q1Ctp/+TTG9UfJE/r0pNUJ26RsssMFuWRgWr5O2Do9voQh3OLnCGZlg/kr6245z276dfJm0vpx4cN1+s//IrpMDmv89Zo64UFSeBZ2EybDrxIXzHk5h+agcCgDwVouAGqzXPCeQKXTW8VkFihiqhQLYACSecw+PYwp1IAH/pgwEO8WmbdUeBHMivMb93ouL86qvD2vv2hkLqnwnaguI7Ln3sicyrE/HLVyHrtTBO7XOAeNCjNHFLw1Oy9U6Y/YDvzPB4Pix9ZdQkvs2gA+4UcrCZfAfbaeFOYErr2NRe0P0vyiQdJ8JZZkaMSZCOLiFDEfSGwmnKSXXw1MYcqDj8AtS0UuzcsHFpuKNrr27FaYZ887Ed8N1Xfl1fiUC0Nf8a1iKiBUhksUvi2AIosA3eH9WeFIpZ4f4kK3Tt1zgShEmVsHNdHODKUQCO4dY9Mlnex2ghV3XtpxhUyjiSe1uxB+dHcugvMqxiCf2Zs1uBvxS00UCFnehpdCUJ8sV8bGWoMRBWQCTIRxPyS5xMVukL/9+SRnpWy8sv7tRWzCQq3u3EirjbF/eKt4mYetCIKn5FcltyafwSb/meDf60vC2PWYFnbvLfVESRK2RtcPa4E7MSSYmgIEt/uSorYMzcwEaoQxvzqNax0qVN1kqfE3XrUNQXXVR0W2TH6YXoAWrh1RJI8YKo/bBSZALnYXSlZkyjS18KeZJ7XlSafsWJV3mCbEmt2T/c6D0AbxHxOxh0l6Yy30qL9yMmUBmgPwks0FPeLoaAcwNi+IvzLlpBBA5N45tDMBHK9c6Z0Xzy53t7RW9kHuRlSvoYuVbXH0WmeKSPfNdBhNmY0wJC29yDwpXl8i0MHYfSkqBg+2PdrQI7ZIWzGs4/9AGVvaozpY+sre6xkEwScYMGYZgA/bcO6xbczGQ1vj/Kb75bL9iggqshx3NgY6UkDodk1jbfit7N0v6jyF2k9oJk4FWw+OU/nwAkvnxOhAz9L7qGpYsVUVvicu9bJjzx6QjGmDcKsWEHE9S0I0lY8ngl6q30kdJWu6wQAkabmdm5kkpsW94R/z/TkHP3cXBPYmgKKigAAAAAAAA";
      break;}

    case 2:
      {
      document.getElementById("p1dice").src =
        "https://img.itch.zone/aW1hZ2UvNjQ2NzEvMjkyMzc5LnBuZw==/347x500/gj3aGP.png";
      break;
      }
    case 3:
      {
      document.getElementById("p1dice").src =
        "https://th.bing.com/th/id/R.625a8624c6565b3a394d6cc63001af95?rik=%2fJEFU3Acor43Qw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ca%2fpEb%2f7capEbKni.jpg&ehk=rQoNjgwJ7ak9Q4IirwWcweCNzhrwmBt%2fLwXkS52GmBU%3d&risl=&pid=ImgRaw&r=0";
      break;
      }
        case 4:
          {
      document.getElementById("p1dice").src = "https://tse3.mm.bing.net/th/id/OIP.EODG2OV1iOsqsQn2Op3h6QHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3";
    break;
          }
      case 5:
        {
      document.getElementById("p1dice").src = "https://rlv.zcache.com/red_dice_die_roll_five_square_seal-r82936130c21f4d32bf89e95f4315d736_v9wf3_8byvr_630.jpg?view_padding=[285%2C0%2C285%2C0]";
      break;
        }
    case 6:
      {
    document.getElementById("p1dice").src = "https://tse1.explicit.bing.net/th/id/OIP.Wr0Wp4OB9ebaDJukeN6y3AAAAA?pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3";
  break;   
  }
  default:
    document.getElementById("p1dice").src ="https://tse1.explicit.bing.net/th/id/OIP.Wr0Wp4OB9ebaDJukeN6y3AAAAA?pid=ImgDet&w=195&h=195&c=7&dpr=1.4&o=7&rm=3";

  }

  if (DF == 6) {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("pls1").innerText = Score;
  }
}
function p2Play() {
  console.log("Player2Playing");
  let Score = Number(document.getElementById("pls2").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  if (DF == 6) {
    document.getElementById("rolldice1").disabled = false;
    document.getElementById("rolldice2").disabled = true;
  } else {
    Score = Score + DF;
    document.getElementById("pls2").innerText = Score;
  }
}
