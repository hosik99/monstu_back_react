import React, { useState,useEffect } from "react";
import { getAllPostCate } from "../../hooks/api/controller/categoryHandler";
import { PostCategory } from "../../hooks/types/PostCategory";
import {Container,Title,FormGroup,ThumbnailPreview,StyledButton,SelectCategory,StyledTextarea} from "../styledCSS/PostCreatePageCSS";
import { extractionLan } from "../../hooks/api/controller/wordController";
import InspectionModal from "./InspectionModal";
import { savePost } from "../../hooks/api/controller/postsController";

const PostCreatePage = () =>{

    const [formData,setFormData] = useState<{title:string,content:string,category:string}>({
        title : '',
        content : '',
        category : '',
    })

    const [formWordData,setFormWordData] = useState<{ori:string[],tran:string[]}>({
        ori : [],
        tran : [],
    })

    const [formSenData,setFormSenData] = useState<{ori:string[],tran:string[]}>({
        ori : [],
        tran : [],
    })

    const [image,setImage] = useState<string>('');
    const [defaultImg,setdefaultImg] = useState<string>('');

    const [postCate,setPostCate] = useState<PostCategory[]>([]);

    const [wordModalOpen, setWordModalOpen] = useState<Boolean>(false);
    const [senModalOpen, setSenModalOpen] = useState<Boolean>(false);

    const openWordModal = () => { setWordModalOpen(true);}
    const closeWordModal = () => setWordModalOpen(false);

    const openSenModal = () => { setSenModalOpen(true);}
    const closeSenModal = () => setSenModalOpen(false);

    const handleFormDataChange = (e: any) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value.trim()
        });
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result); // 파일 내용을 base64로 저장
            reader.readAsDataURL(file); // 파일을 base64로 변환
        }
    };

    // formData.title, formData.conten를 이용해서 spring에서 언어(문장,단어) 추출
    const extraction = async (formData) => {
        const result = await extractionLan(formData);

        console.log('result: '+result.data)

        setFormSenData(prevData => ({
            ...prevData,
            ori: extractSen(formData)
        }));

        setFormWordData(prevData => ({
            ...prevData,
            ori: result.data
        }));
    }

    //title + content를 \n을 기준으로 나누어 목록 형태로 반환
    const extractSen = (formData) => {
        let target = formData.title + formData.content;
        return target.split(/[\r\n]+/);
    }

    const refreshCategory = async () => {
        const result = await getAllPostCate();
        result.success ? setPostCate(result.data) : setPostCate([]);
    }

    const save = async () => {
        const postData = {
            title: formData.title,
            content: formData.content,
            category: formData.category,
            formWordData: formWordData,
            formSenData: formSenData,
        }

        const result = await savePost(postData);
        if(result.success){ 
            alert("저장되었습니다.");
        }
        else{
            alert(result.message);
        }
    }

    useEffect(() => {
        refreshCategory();
    },[])

    return (
        <Container>
            <Title>Post Create Page</Title>
        
            <FormGroup>
                <label>Title</label>
                <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleFormDataChange}
                />
            </FormGroup>
        
            <FormGroup>
                <label>Content</label>
                <StyledTextarea
                style={{ height: "160px" }}
                id="content"
                name="content"
                value={formData.content}
                onChange={handleFormDataChange}
                />
                <StyledButton onClick={() => extraction(formData)}>extraction</StyledButton>
                <StyledButton onClick={openWordModal}>Word-Inspection</StyledButton>
                <StyledButton onClick={openSenModal}>Sentence-Inspection</StyledButton>
            </FormGroup>
            
            {wordModalOpen && 
                <InspectionModal 
                    closeModal={closeWordModal} 
                    target={formWordData.ori} setTargetForm={setFormWordData}
                ></InspectionModal> 
            }

            {senModalOpen && 
                <InspectionModal 
                    closeModal={closeSenModal} 
                    target={formSenData.ori} setTargetForm={setFormSenData}
                ></InspectionModal> 
            }

            {/* <FormGroup>
                <label>Thumbnail</label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <ThumbnailPreview>
                {image ? (
                    <img src={image} alt="thumbnail" />
                ) : (
                    <img src={defaultImg} alt="thumbnail" />
                )}
                </ThumbnailPreview>
            </FormGroup> */}
        
            <FormGroup>
                <label htmlFor="category">Category</label>
                <SelectCategory
                name="category"
                value={formData.category}
                onChange={handleFormDataChange}
                >
                <option value="" disabled>
                    Select a category
                </option>
                {postCate.map((cate) => (
                    <option key={cate.id.toString()} value={cate.category}>
                    {cate.category}
                    </option>
                ))}
                </SelectCategory>
            </FormGroup>
        
            

            <StyledButton onClick={save}>Submit</StyledButton>
        </Container>
    );
}

export default PostCreatePage;