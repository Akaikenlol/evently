"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

type PaginationProps = {
	urlParamName?: string;
	page: number | string;
	totalPages: number;
};

const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const onClick = (btnType: string) => {};

	return (
		<div className="flex gap-2">
			<Button
				size={"lg"}
				variant={"outline"}
				className="w-28"
				onClick={() => onClick("prev")}
				disabled={Number(page) <= 1}
			>
				Previous
			</Button>
			<Button
				size={"lg"}
				variant={"outline"}
				className="w-28"
				onClick={() => onClick("next")}
				disabled={Number(page) >= totalPages}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;