import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex justify-between items-center">
				<Link href={"/"} className="w-36">
					<Image
						src={"/assets/images/logo.svg"}
						alt="Evently logo"
						width={128}
						height={38}
						className="object-contain cursor-pointer"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
