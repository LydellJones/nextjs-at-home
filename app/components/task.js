import WhiteContainer from "components/midcontain"

export default function Task() {
    return(
        <div style={{padding:10}}>
            <WhiteContainer extraClassName="w-full h-100">
                <div className="w-5/8" style={{padding:10}}>
                    <div style={{paddingBottom:10}}>
                        <WhiteContainer extraClassName="">
                            <a id="title" style={{padding:5}}>Title</a>
                        </WhiteContainer>
                    </div>
                    <div style={{paddingBottom:10}}>
                        <WhiteContainer extraClassName="">
                            <p id="description" style={{padding:5, height:50, overflow:"auto"}}>
                                Description: This is a test description. The description is being tested here.
                                How's about we make this description quite a bit longer? Looks like it's working
                                quite nicely! Let's just keep writing random stuff to see what exactly the limit
                                of our text is! What happens if we just keep writing? Remember: I'm not a
                                masochist, I just wanna know what my code can take.
                            </p>
                        </WhiteContainer>
                    </div>
                    <div>
                        <button type="submit" formAction="">
                            <WhiteContainer>
                                <a style={{padding:5}}>Done!</a>
                            </WhiteContainer>
                        </button>
                    </div>
                </div>
                <div className="w-2/8" style={{paddingTop:10, paddingBottom:10}}>
                    <WhiteContainer>
                        <p>
                            <p>Attached files:</p><p id="files">file.txt</p>
                            <p>Who asked:</p><p id="whoAsked">Can't find 'em...</p>
                            <p>Due date:</p><p id="dueDate">1969/12/31 23:59</p>
                        </p>
                    </WhiteContainer>
                </div>
                <div className="w-1/8" style={{padding:10}}>
                    <div>
                        <button id="buttonAuthorTasks" style={{paddingBottom:10}}>
                            <WhiteContainer>
                                <a style={{padding:5}}>Tasks from Author</a>
                            </WhiteContainer>
                        </button>
                    </div>
                    <div>
                        <button id="buttonDownload">
                            <WhiteContainer>
                                <a style={{padding:5}}>Download File</a>
                            </WhiteContainer>
                        </button>
                    </div>
                </div>
            </WhiteContainer>
        </div>
    );
}