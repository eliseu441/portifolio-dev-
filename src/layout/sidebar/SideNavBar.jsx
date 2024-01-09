import React, { useState } from "react";
import "./SideNavBar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/icons/0-circle-fill.svg';
import { Link } from "react-router-dom";
import logo from './img/logo.png';
import logo2 from './img/logoV.png';

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState(true);

	const handleClick = () => {
		setShowSubMenu(!showSubMenu);
		var submenuElement = document.querySelector(".submenu");

		if (showSubMenu) {
			submenuElement.classList.add("active");
		} else {
			submenuElement.classList.remove("active");
		}
	}
	const removeChecked = () => {
		var checkbox = document.querySelector("#checkbox-menu")
		if (checkbox) {

			checkbox.click()
		}
	}

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper" style={isExpanded ? { backgroundColor: "rgb(0, 0, 0, 0.3)" } : { backgroundColor: "rgb(0, 0, 0, 0)" }}>
				<div className="nav-heading " style={isExpanded ? { backgroundColor: "rgb(0, 0, 0, 0.8)" } : { backgroundColor: "rgb(0, 0, 0, 0)" }}>
					{isExpanded && (
						<div className="text-size mt-3">
						</div>
					)}
					<input type="checkbox" id="checkbox-menu" onClick={() => setExpendState(!isExpanded)} />
					<label for="checkbox-menu" className="hamburguer ">
						<div id="saturn">
							<div class="planet bottom planet-bg"></div>
							<div class="rings"></div>
							<div class="planet top planet-bg"></div>
						</div>
					</label>
				</div>
				{isExpanded && (
					<div className="nav-menu mt-0">
						<div class="list-group">
							<Link to="/homeMobile" className="decoration " onClick={e => removeChecked()}>
								<span class="list-group-item list-group-item-action"><span class="d-flex justify-content-center">
									<span style={{ marginLeft: "10px" }} class=" title-home"> ABOUT ME</span>
								</span></span>
							</Link>
							<Link to="/ProjectsMobile" className="decoration " onClick={e => removeChecked()}>
								<span class="list-group-item list-group-item-action"><span class="d-flex justify-content-center">
									<span style={{ marginLeft: "10px" }} class=" title-home"> PROJECTS</span>
								</span></span>
							</Link>
							<Link to="/experienceMobile" className="decoration " onClick={e => removeChecked()}>
								<span class="list-group-item list-group-item-action"><span class="d-flex justify-content-center">
									<span style={{ marginLeft: "10px" }} class=" title-home"> EXPERIENCE</span>
								</span></span>
							</Link>
							<div>
								<span style={{ backgroundColor: "rgb(0, 0, 0, 0.7)" }} class="list-group-item list-group-item-action dropdown-toggle " onClick={handleClick}><span class="text-margin "><i class="bi bi-telephone-fill icons-color"></i>
									<span style={{ marginLeft: "10px" }} class="menu-titles "> Contact </span>
								</span></span>
							</div>
							<div className="submenu">
								<div>
									<div class="list-group ">
										<Link to="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/" className="decoration " onClick={e => removeChecked()}>
											<span class="list-group-item list-group-item-action "><span class="text-margin  ">

												<span style={{ marginLeft: "20px", color: "#00bbf0" }} class="menu-titles">  <i class="bi bi-linkedin fs-6"></i></span>
												<span style={{ marginLeft: "10px" }} class="menu-titles "> Linkedin	</span>
											</span></span>
										</Link>
									</div>
									<div class="list-group">
										<Link to="https://github.com/eliseu441" className="decoration " onClick={e => removeChecked()}>
											<span class="list-group-item list-group-item-action "><span class="text-margin ">

												<span style={{ marginLeft: "20px", color: "white" }} class="menu-titles ">  <i class="bi bi-github fs-6"></i></span>
												<span style={{ marginLeft: "10px" }} class="menu-titles "> Github	 </span>
											</span></span>
										</Link>
									</div>
								</div>
							</div>



						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideNavBar;
