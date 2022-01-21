import React from "react";
import {Text} from "@yandex/ui/Text";

export const Header = () => {
    return (
        <div className={'header'}>
            <Text weight={"bold"} color={"inverse"} className={'leftItem'} maxLines={1}>Britkov Anatoly (P3213)</Text>
            <Text weight={"bold"} color={"inverse"} className={'rightItem'} maxLines={1}>№13901</Text>
        </div>
    )
}