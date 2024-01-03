import {Attribute_dto, Element_dto} from "./element-dto";

export class BMIResponseDTO {
    private _work_detail: work_detail_dto | undefined;
    private _participants: participants_dto | undefined;
    private _alt_titles: Array<alt_title_dto> | undefined;

    get work_detail(): work_detail_dto | undefined {
        return this._work_detail;
    }

    set work_detail(value: work_detail_dto | undefined) {
        this._work_detail = value;
    }

    get participants(): participants_dto | undefined {
        return this._participants;
    }

    set participants(value: participants_dto | undefined) {
        this._participants = value;
    }

    get alt_titles(): Array<alt_title_dto> | undefined {
        return this._alt_titles;
    }

    set alt_titles(value: Array<alt_title_dto> | undefined) {
        this._alt_titles = value;
    }


}

function mapAttrTo<T>(attr: Attribute_dto[]): T[] {
    if (attr.length) {
        return attr.map((a: Attribute_dto) => a as T);
    }
    return [];
}

function convertElemToWorkDetail(elems: Element_dto[] | undefined): work_detail_dto | undefined {
    if (elems) {
        return mapAttrTo<work_detail_dto>(elems.map((elem: Element_dto) => elem?.attributes).flat())[0];
    }
    return undefined;
}

function convertElemToAltTitles(elems: Element_dto[] | undefined): Array<alt_title_dto> | undefined {
    if (elems) {
        let titles: Element_dto[] = []
        titles = titles.concat(...elems.map((elem: Element_dto) => elem.elements as Element_dto[]))
        return mapAttrTo<alt_title_dto>(titles.map((a: Element_dto) => a?.attributes || []).flat());
    }
    return [];
}


function convertElemToParticipants(elems: Element_dto[] | undefined): participants_dto | undefined {
    if (elems?.length) {
        return {
            publisher: mapAttrTo<participant_dto>(elems.map((elem: Element_dto) => elem?.attributes || []).flat().filter((a: Attribute_dto) => a.pwa_ind === 'P')),
            writer: mapAttrTo<participant_dto>(elems.map((elem: Element_dto) => elem?.attributes).flat().filter((a: Attribute_dto) => a.pwa_ind === 'W')),
        } as participants_dto;
    }
    return undefined;
}

export function convertElementToBMIResponseDTO(element: Element_dto): BMIResponseDTO {
    try {
        if (element?.elements?.length && element?.elements[0]?.elements?.length) {
            const elems: Element_dto[] = element.elements[0].elements;
            const work_detail: Element_dto[] | undefined = elems.filter((attr: Element_dto) => attr.name === 'work_detail');
            const participants: Element_dto[] | undefined = elems.filter((attr: Element_dto) => attr.name === 'participant');
            const alt_titles: Element_dto[] | undefined = elems.filter((attr: Element_dto) => attr.name === 'alt_titles');

            return {
                work_detail: convertElemToWorkDetail(work_detail),
                alt_titles: convertElemToAltTitles(alt_titles),
                participants: convertElemToParticipants(participants)
            } as BMIResponseDTO;
        }
        return {} as BMIResponseDTO
    } catch (e) {
        console.error('convertElementToBMIResponseDTO', e)
        return {} as BMIResponseDTO
    }

}

interface work_detail_dto {
    title: string;
    workid: string;
    iswc: string;
    datereg: string;
    regtype: string;
    awards: string;
}

interface participants_dto {
    publisher: Array<participant_dto>,
    writer: Array<participant_dto>
}

interface participant_dto {
    part_name: string;
    pwa_ind: string;
    soc_id: string;
    tpj_share_us: string;
    part_cae_no: string;
}

interface alt_title_dto {
    title: string;
}