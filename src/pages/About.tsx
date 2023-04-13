import React from "react";
import { Section } from "../components/Section";
import styled from "styled-components";
import UVAlogo from "../css/UVA-logo.png";

const Row = styled.div`
	display: flex;
	gap: 25px;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: rgb(255, 255, 255, 0.3);
	border: 1px solid #a9ffcb;
	border-radius: 5px;
`;
const LeftColumn = styled(Column)`
	flex: 40%;
`;
const RightColumn = styled(Column)`
	flex: 60%;
`;
const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export function About() {
	return (
		<Section title="About">
			<Row>
				<LeftColumn>
					<Image src={UVAlogo} alt="logo" />
				</LeftColumn>
				<RightColumn>
					<div>
						<h1>Contact</h1>
						<p>isf4rjk@virginia.edu</p>
						<p>(508) 507-1856</p>
						<a
							href="http://linkedin.com/in/isabella-felaco"
							target="_blank"
							rel="noreferrer"
						>
							View LinkedIn
						</a>
					</div>
					<div>
						<h1>Education</h1>
						<p>University of Virgina, Charlottesville, VA</p>
						<i>2020-2024</i>
						<p>Bachelor of Science in Computer Science</p>
					</div>
					<div></div>
				</RightColumn>
			</Row>
		</Section>
	);
}
