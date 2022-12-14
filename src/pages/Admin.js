import styled from '@emotion/styled';
import MobileDisplay from '../components/common/MobileDisplay';

const SearchWrapper = styled.div`
	position: relative;
	z-index: 2;
	padding: 10px 16px;
	background-color: rgb(255, 255, 255);
`;

const Callout = styled.div`
	border: 1px solid rgb(244, 244, 244);
	border-radius: 8px;
	padding: 10px;
	margin-bottom: 10px;
	background-color: rgb(255, 255, 255);
	width: 50%;
	word-break: keep-all;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	// hide scrollbar
	::-webkit-scrollbar {
		display: none;
	}
`;

export default function Search() {
	return (
		<>
			<MobileDisplay>
				<Callout>
					<h4>๐ ์ฐธ๊ณ </h4>
					<p>
						ํ์ฌ Machine Learning Server ๊ตฌํ์ด ์์ฑ๋์ง ์์ Admin ํ์ด์ง๊ฐ
						์๋ํ์ง ์์ต๋๋ค.
					</p>
				</Callout>

				<h1>๋ฐ์ดํฐ ์ถ์ถ</h1>
				<Callout>
					<h4>๐ ์ฐธ๊ณ </h4>
					<p>
						๋ฐ์ดํฐ ํฌ๋กค๋ง์ด ํ์ฉ๋์ง ์์ ์ง์  ๋ฆฌ๋ทฐ ๋ฐ์ดํฐ๋ฅผ ๋ณต์ฌ ๋ถ์ฌ๋ฃ๊ธฐ
						ํ์ต๋๋ค. ์ปฌ๋ฆฌ์ ์์ฒด ๋ฆฌ๋ทฐ API๋ฅผ ์ฐ๋์์ผ๋ ์ข์ ๊ฒ ๊ฐ์ต๋๋ค.
					</p>
				</Callout>

				<form>
					<label>
						๋ฆฌ๋ทฐ ๋ฐ์ดํฐ ์์ด๋:
						<input type="text" name="name" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</MobileDisplay>
		</>
	);
}
