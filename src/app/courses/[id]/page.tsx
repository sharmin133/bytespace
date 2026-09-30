import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CourseHeader } from "@/components/courses/CourseHeader";
import { VideoPreview } from "@/components/courses/VideoPreview";
import { EnrollCard } from "@/components/courses/EnrollCard";
import { CourseTabs } from "@/components/courses/CourseTabs";
import { CourseAbout,  LessonPanel,} from "@/components/courses/CoursePanels";
import { catalog } from "@/data/content";
import { getCourseDetail } from "@/lib/courses";
import { ReviewsPanel } from "@/components/courses/ReviewsPanel";

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return catalog.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseDetail(id);
  if (!course) return { title: "Course not found – ByteSpace" };
  return { title: `${course.title} – ByteSpace`, description: course.subtitle };
}

export default async function CourseDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const course = getCourseDetail(id);
  if (!course) notFound();

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <CourseHeader course={course} />

        <Container className="isolate grid gap-x-10 gap-y-8 pb-20 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_23rem]">
          {/* Video: pichone full-width blue strip (before:) shudhu video er height porjonto */}
          <div className="relative pb-7 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-brand before:bg-grid before:content-[''] lg:col-start-1 lg:row-start-1">
            <FadeIn delay={400}>
              <VideoPreview poster={course.poster} src={course.video} title={course.title} />
            </FadeIn>
          </div>

          {/* Mobile e video-r niche, desktop e dan e sticky */}
          <FadeIn delay={500} className="lg:sticky lg:top-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <EnrollCard course={course} />
          </FadeIn>

          <div className="lg:col-start-1 lg:row-start-2">
            <CourseTabs
              panels={{
                About: <CourseAbout course={course} />,
                Lesson: <LessonPanel course={course} />,
               Reviews: <ReviewsPanel course={course} />,
              }}
            />
          </div>
        </Container>
      </main>

      <div className="border-t border-gray-200">
        <Footer />
      </div>
    </>
  );
}